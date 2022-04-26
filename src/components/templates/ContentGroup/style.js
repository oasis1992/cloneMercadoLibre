import styled from 'styled-components'
import devicesBreackpoints from 'providers/devicesBreackpoints'

export const ContentGroupStyled = styled.div`
    background-color: white;
    height: 100%;
    border-radius: ${({ theme }) => theme.rems(4)};
    padding: ${({ theme, padding }) => theme.rems(padding || 32)};
`

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

export const HeaderContentGroup = styled.div`
    margin-top: ${({ theme }) => theme.rems(16)};
    margin-bottom: ${({ theme }) => theme.rems(16)};
    margin-left: ${({ theme }) => theme.rems(16)};
    @media ${devicesBreackpoints.tablet} {
        margin-left: 0;
    }
`
