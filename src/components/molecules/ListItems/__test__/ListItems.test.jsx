import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import mockProducts from 'mocks/products'
import wrapperStyled from 'utils/testing/wrapperStyled'
import ListItems from '../index'

describe('<ListItems />', () => {
    it('should render list items', () => {
        const component = wrapperStyled(ListItems, { products: mockProducts.items })
        expect(component.container.firstChild.childNodes.length).toBe(mockProducts.items.length)
    })
})
