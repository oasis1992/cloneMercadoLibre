import { fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import wrapperStyled from 'utils/testing/wrapperStyled'
import Main from '../index'

describe('<SearchPage />', () => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter')

    it('should stay on the same page', () => {
        const mockPush = jest.fn()
        useRouter.mockImplementation(() => ({
            query: {
                search: undefined,
            },
            push: mockPush,
        }))

        const props = {
            children: () => ('Test'),
            // initialSearchValue: '',
            title: 'test title',
            description: 'test description',
            url: 'https://test.com',
            noIndex: false,
        }
        const component = wrapperStyled(Main, props)
        const buttonSearch = component.getByAltText('search')
        fireEvent.click(buttonSearch)
        expect(mockPush).not.toHaveBeenCalled()
    })

    it('should go to the product list searcheds', () => {
        const mockPush = jest.fn()
        useRouter.mockImplementation(() => ({
            query: {
                search: undefined,
            },
            push: mockPush,
        }))

        const props = {
            children: () => ('Test'),
            initialSearchValue: 'calceton',
            title: 'test title',
            description: 'test description',
            url: 'https://test.com',
        }

        const newText = 'calcetin amarillo'
        const component = wrapperStyled(Main, props)
        const textInput = component.getByPlaceholderText('Nunca dejes de buscar')
        fireEvent.change(textInput, { target: { value: newText } })
        const buttonSearch = component.getByAltText('search')
        fireEvent.click(buttonSearch)
        expect(mockPush).toHaveBeenCalledTimes(1)
        expect(mockPush).toHaveBeenCalledWith(`/items?search=${newText}`)
    })
})
