import styled from 'styled-components'

export const Input = styled.input`
    height: ${({ theme }) => theme.rems(39)};
    width: 100%;
    font-size: ${({ theme }) => theme.rems(18)};
    padding-left: ${({ theme }) => theme.rems(10)};
    color: ${({ theme }) => theme.colors.textDarkGray};
`

export const Header = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${({ theme }) => theme.rems(60)};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WrapperInput = styled.div`
    display: flex;
    width: 90%;
`

export const WrapperSearchIcon = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ theme }) => theme.rems(50)};
`

export const WrapperLogo = styled.div`
    margin-right: ${({ theme }) => theme.rems(10)};
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const Image = styled.img``
