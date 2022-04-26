import styled from 'styled-components'
import devicesBreackpoints from 'providers/devicesBreackpoints'

export const ProductContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    @media ${devicesBreackpoints.mobileL} {
        display: grid;
        grid-template-columns: auto 1fr 1fr;
    }
`

export const ImageContainer = styled.div`
    width: ${({ theme }) => theme.rems(180)};
    height: ${({ theme }) => theme.rems(180)};
    border-radius: ${({ theme }) => theme.rems(4)};
    margin-right: ${({ theme }) => theme.rems(16)};
`

export const ContainerPrice = styled.div`
    margin-bottom: ${({ theme }) => theme.rems(32)};
    > span {
        font-size: ${({ theme }) => theme.rems(24)};
        font-weight: bold;
    }
`

export const CenterContainer = styled.div`
    margin-top: ${({ theme }) => theme.rems(16)};
    > h2 {
        font-size: ${({ theme }) => theme.rems(18)};
    }
`

export const RightContainer = styled.div`
    margin-top: ${({ theme }) => theme.rems(16)};
    display: flex;
    justify-content: center;
    > span {
        font-size: ${({ theme }) => theme.rems(12)};
        color: ${({ theme }) => theme.colors.textLightGray};
        font-weight: bold;
    }
`

export const Image = styled.img`
    width: ${({ theme }) => theme.rems(180)};
    height: ${({ theme }) => theme.rems(180)};
    object-fit: contain;
`

export const LogoFreeShipping = styled.img``

export const ContainerFreeShipping = styled.span`
    margin-left: ${({ theme }) => theme.rems(16)};
`
