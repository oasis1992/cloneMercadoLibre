import styled from 'styled-components'
import devicesBreackpoints from 'providers/devicesBreackpoints'

export const LabelSellers = styled.span`
    font-size: ${({ theme }) => theme.rems(14)};
    color: ${({ theme }) => theme.colors.darkGray};
`

export const LabelProduct = styled.h2`
    font-size: ${({ theme }) => theme.rems(24)};
    color: ${({ theme }) => theme.colors.darkGray};
    margin-top: ${({ theme }) => theme.rems(16)};
    margin-bottom: ${({ theme }) => theme.rems(32)};
`

export const LabelPrice = styled.span`
    font-size: ${({ theme }) => theme.rems(46)};
    color: ${({ theme }) => theme.colors.darkGray};
    display: flex;
`

export const ContainerButton = styled.div`
    margin-top: ${({ theme }) => theme.rems(32)};
    @media ${devicesBreackpoints.tablet} {
        margin-right: ${({ theme }) => theme.rems(32)};
    }
`

export const LabelTitle = styled.h2`
    font-size: ${({ theme }) => theme.rems(28)};
    color: ${({ theme }) => theme.colors.darkGray};
    margin-bottom: ${({ theme }) => theme.rems(32)};
`

export const TextDescription = styled.p`
    font-size: ${({ theme }) => theme.rems(16)};
    color: ${({ theme }) => theme.colors.textLightGray};
`

export const LabelPriceMini = styled.span`
    font-size: ${({ theme }) => theme.rems(18)} !important;
`

export const ContainerDescription = styled.div`
    margin-top: ${({ theme }) => theme.rems(32)};
    margin-bottom: ${({ theme }) => theme.rems(32)};
    @media ${devicesBreackpoints.laptop} {
        display: grid;
        grid-template-columns: 1fr 0.5fr;
    }
`

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`

export const ContainerInfo = styled.div`
    @media ${devicesBreackpoints.laptop} {
        display: grid;
        grid-template-columns: 1fr 0.5fr;
    }
`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media ${devicesBreackpoints.laptop} {
        margin-right: ${({ theme }) => theme.rems(16)};
    }
`
