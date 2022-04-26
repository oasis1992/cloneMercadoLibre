import styled from 'styled-components'
import SlimCardProduct from 'components/molecules/SlimCardProduct'

export const SlimCardProductStyled = styled(SlimCardProduct)``

export const WrapperSearchResult = styled.div`
    display: flex;
    flex-direction: column;
    ${SlimCardProductStyled} {
        margin-top: ${({ theme }) => theme.rems(16)};
        margin-bottom: ${({ theme }) => theme.rems(16)};
    }
`
