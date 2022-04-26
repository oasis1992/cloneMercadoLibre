import axios from 'axios'
import { renderHook } from '@testing-library/react-hooks'
import mockProductsResponse from 'mocks/products'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import useSearchProducts from '../useSearchProducts'

jest.mock('axios')

describe('useSearchProducts', () => {
    beforeAll(() => {
        axios.get.mockReset()
    })

    const textValue = 'calcetines'
    axios.get.mockResolvedValueOnce({
        data: mockProductsResponse,
    })

    const { result } = renderHook(() => useSearchProducts(textValue))

    it('should return data products', async () => {
        expect(result.current.data).toBeDefined()
        expect(result.current.loading).toBeFalsy()
        expect(result.current.data.items).toEqual(mockProductsResponse.items)
    })

    axios.get.mockRejectedValueOnce(new Error('error message'))
    const { result: result2 } = renderHook(() => useSearchProducts(textValue))
    it('should not return data', () => {
        expect(result2.current.error.message).toBe('error message')
        expect(result2.current.loading).toBeFalsy()
        expect(result2.current.data?.items).toBeUndefined()
    })
})
