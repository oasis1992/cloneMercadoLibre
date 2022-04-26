import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import pxToRem from 'utils/pxToRem'
import wrapperStyled from 'utils/testing/wrapperStyled'
import SlimCardProduct from '../index'

const mockProduct = {
    id: 1,
    title: 'Product 1',
    price: '$100',
    picture: 'https://via.placeholder.com/150',
    cityName: 'City 1',
    freeShipping: true,
}

describe('<SlimCardProduct />', () => {
    it('should render picture', () => {
        const component = wrapperStyled(SlimCardProduct, mockProduct)
        const img = component.container.firstChild.querySelector('img')
        expect(img).toHaveStyle(`height: ${pxToRem(180)}`)
        expect(img).toHaveStyle(`width: ${pxToRem(180)}`)
    })

    it('should render values of product', () => {
        const component = wrapperStyled(SlimCardProduct, mockProduct)
        component.getByText(mockProduct.title)
        component.getByText(mockProduct.price)
        component.getByText(mockProduct.cityName)
    })

    it('should show free shipping icon', async () => {
        const component = wrapperStyled(SlimCardProduct, mockProduct)
        const freeShippingImage = await component.findByAltText('free shipping')
        expect(freeShippingImage).toBeDefined()
    })

    it('should not show free shipping icon', async () => {
        mockProduct.freeShipping = false
        const component = wrapperStyled(SlimCardProduct, mockProduct)
        const freeShippingImage = component.queryByAltText('free shipping')
        expect(freeShippingImage).toBeNull()
    })
})
