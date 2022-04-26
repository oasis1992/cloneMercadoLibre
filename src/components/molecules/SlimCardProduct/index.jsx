import {
    ProductContainer,
    ImageContainer,
    CenterContainer,
    RightContainer,
    ContainerPrice,
    Image,
    LogoFreeShipping,
    ContainerFreeShipping,
} from './style'

const SlimCardProduct = ({
    title,
    price,
    picture,
    cityName,
    freeShipping,
    className,
    onClick,
}) => (
    <ProductContainer onClick={onClick} className={className}>
        <ImageContainer>
            <Image alt="image product" title={title} src={picture} />
        </ImageContainer>

        <CenterContainer>
            <ContainerPrice>
                <span>$ </span>
                <span>{price}</span>
                {freeShipping && (
                    <ContainerFreeShipping>
                        {freeShipping && (
                            <LogoFreeShipping
                                alt="free shipping"
                                title="free shipping"
                                src="/assets/ic_shipping.png"
                                srcSet="
                                    /assets/ic_shipping@2x.png 500w,
                                    /assets/ic_shipping@2x.png 800w,
                                "
                                width={20}
                                height="100%"
                            />
                        )}
                    </ContainerFreeShipping>
                )}
            </ContainerPrice>
            <h2>{title}</h2>
        </CenterContainer>
        <RightContainer>
            <span>{cityName}</span>
        </RightContainer>
    </ProductContainer>
)

export default SlimCardProduct
