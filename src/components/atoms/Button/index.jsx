import styled from 'styled-components'

const Button = styled.button`
    background: ${({ theme }) => theme.colors.primaryButton};
    width: 100%;
    color: white;
    font-weight: bold;
    height: ${({ theme }) => theme.rems(60)};
    border-radius: ${({ theme }) => theme.rems(4)};
    cursor: pointer;
    transition: background 0.8s;
    background-position: center;
    &:hover {
        background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
    }

    &:active {
        background-color: #6eb9f7;
        background-size: 100%;
        transition: background 0s;
    }
`

export default Button
