import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import { PLACE_HOLDER_INPUT_SEARCH } from 'utils/constants'
import wrapperStyled from 'utils/testing/wrapperStyled'
import '@testing-library/jest-dom'
import SearchBar from '../index'

describe('<SearchBar />', () => {
    it('should show placeholder text on input', () => {
        const mockProps = {
            onChange: jest.fn(),
            onSubmit: jest.fn(),
            value: 'Calcetines rosas',
        }
        const component = wrapperStyled(SearchBar, mockProps)
        const textInput = component.getByPlaceholderText('Nunca dejes de buscar')
        expect(textInput).toBeDefined()
    })

    it('should show defaultValue text on input', () => {
        const mockProps = {
            onChange: jest.fn(),
            onSubmit: jest.fn(),
            value: 'Calcetines rosas',
        }
        const component = wrapperStyled(SearchBar, mockProps)
        const textInput = component.getByPlaceholderText('Nunca dejes de buscar')
        expect(textInput.value).toEqual(mockProps.value)
    })

    it('should call one time onChange when change the input search', () => {
        const mockOnChange = jest.fn()
        const mockProps = {
            onChange: mockOnChange,
            onSubmit: jest.fn(),
            value: 'Calcetines rosas',
        }

        const appendValue = 'y morados'
        mockProps.value += appendValue
        const component = wrapperStyled(SearchBar, mockProps)
        const textInput = component.getByPlaceholderText('Nunca dejes de buscar')
        fireEvent.change(textInput, { target: { value: appendValue } })
        expect(mockOnChange).toHaveBeenCalledTimes(1)
        expect(textInput.value).toEqual(`${mockProps.value}`)
    })

    it('should submit data press submit button', () => {
        const mockClick = jest.fn()
        const mockProps = {
            onChange: jest.fn(),
            onSubmit: mockClick,
            value: 'Calcetines rosas',
        }
        const component = wrapperStyled(SearchBar, mockProps)
        const searchImage = component.getByAltText('search')
        const wrapperSearch = searchImage.parentNode
        fireEvent.click(wrapperSearch)
        expect(mockClick).toHaveBeenCalledTimes(1)
    })

    it('should submit data when press enter on input', () => {
        const mockClick = jest.fn()
        const mockProps = {
            onChange: jest.fn(),
            onSubmit: mockClick,
            value: 'Calcetines rosas',
        }
        const component = wrapperStyled(SearchBar, mockProps)
        const textInput = component.getByPlaceholderText(PLACE_HOLDER_INPUT_SEARCH)
        fireEvent.keyDown(textInput, { key: 'Enter', code: 13 })
        expect(mockClick).toHaveBeenCalledTimes(1)
    })
})
