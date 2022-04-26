import { WrapperSearchResult, SlimCardProductStyled } from './style'

const ListItems = ({ products = [], onClick, dataTestId }) => (
    <WrapperSearchResult data-testid={dataTestId}>
        {products.map((product) => (
            <SlimCardProductStyled
                key={product.id}
                freeShipping={product.free_shipping}
                picture={product.picture}
                cityName={product.city_name}
                title={product.title}
                price={`${product.price.amount}${product.price.decimals ? `.${product.price.decimals}` : ''}`}
                onClick={() => onClick(product.id)}
            />
        ))}
    </WrapperSearchResult>
)

export default ListItems
