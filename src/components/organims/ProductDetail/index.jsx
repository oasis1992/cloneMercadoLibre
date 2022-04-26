import Button from 'components/atoms/Button'
import useTranslation from 'next-translate/useTranslation'
import {
    ContainerButton,
    LabelPrice,
    LabelProduct,
    LabelSellers,
    LabelPriceMini,
    LabelTitle,
    TextDescription,
    ContainerDescription,
    ContainerInfo,
    ContainerImage,
    Image,
} from './style'

const ProductDetail = ({ product }) => {
    const { t } = useTranslation('detail-product')

    return (
        <div>
            <ContainerInfo>
                <ContainerImage>
                    <Image src={product.picture} />
                </ContainerImage>
                <div>
                    <LabelSellers>{`${t(product.condition)} - ${product.sold_quantity} ${t('sold')}`}</LabelSellers>
                    <LabelProduct>{product.title}</LabelProduct>
                    <LabelPrice>
                        {`$ ${product.price.amount}`}
                        {' '}
                        <LabelPriceMini>{product.price.decimals ? product.price.decimals : '00'}</LabelPriceMini>
                    </LabelPrice>
                    <ContainerButton>
                        <Button>Comprar</Button>
                    </ContainerButton>
                </div>
            </ContainerInfo>
            <ContainerDescription>
                <div>
                    <LabelTitle>Descripción del producto</LabelTitle>
                    <article>
                        <TextDescription>
                            {product.description}
                        </TextDescription>
                    </article>
                </div>
            </ContainerDescription>
        </div>
    )
}

export default ProductDetail
