import { fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import wrapperStyled from 'utils/testing/wrapperStyled'
import mockProductsResponse from 'mocks/products'
import useSearchProducts from 'hooks/useSearchProducts'

import SearchPage from '../index'

jest.mock('hooks/useSearchProducts')

describe('<SearchPage />', () => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter')

    it('should render the products', () => {
        useSearchProducts.mockReturnValue({
            loading: false,
            data: mockProductsResponse,
            error: null,
        })

        const querySearchMock = 'calcetines'

        useRouter.mockImplementation(() => ({
            query: {
                search: querySearchMock,
            },
        }))

        const component = wrapperStyled(SearchPage)
        const componentProductList = component.getByTestId('listItems-ID')
        expect(componentProductList.childNodes.length).toEqual(mockProductsResponse.items.length)
    })

    it('should go to product detail', () => {
        useSearchProducts.mockReturnValue({
            loading: false,
            data: mockProductsResponse,
            error: null,
        })

        const querySearchMock = 'calcetines'

        const mockPush = jest.fn()
        useRouter.mockImplementation(() => ({
            query: {
                search: querySearchMock,
            },
            push: mockPush,
        }))

        const positionProduct = 0
        const component = wrapperStyled(SearchPage)
        const componentProductList = component.getByTestId('listItems-ID')
        fireEvent.click(componentProductList.childNodes[positionProduct])
        expect(mockPush).toHaveBeenCalledWith(`/items/${mockProductsResponse.items[positionProduct].id}`)
    })

    it('should show the text loading', () => {
        useSearchProducts.mockReturnValue({
            loading: true,
            data: null,
            error: null,
        })

        const querySearchMock = 'calcetines'

        const mockPush = jest.fn()
        useRouter.mockImplementation(() => ({
            query: {
                search: querySearchMock,
            },
            push: mockPush,
        }))

        const positionProduct = 0
        const component = wrapperStyled(SearchPage)
        const textLoadingElem = component.getByText('Loading...')
        expect(textLoadingElem).toBeInTheDocument()
    })
})
