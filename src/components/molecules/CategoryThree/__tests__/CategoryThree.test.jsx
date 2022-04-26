import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import wrapperStyled from 'utils/testing/wrapperStyled'
import CategoryThree from '../index'

describe('<CategoryThree />', () => {
    it('render childs CategoryThree', () => {
        const categories = ['category', 'category2', 'category3']
        const component = wrapperStyled(CategoryThree, { categories })
        const ul = component.container.querySelector('ul')
        expect(ul.childNodes.length).toBe(categories.length)
    })

    it('render text CategoryThree', () => {
        const categories = ['category', 'category2', 'category3']
        const component = wrapperStyled(CategoryThree, { categories })

        categories.forEach((category) => {
            component.getByText(category)
        })
    })
})
