import styled from 'styled-components'

export const TreeNode = styled.li``

export const WrapperTree = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    ${TreeNode}:not(:last-child):after {
        content: '>';
        padding: 0 ${({ theme }) => theme.rems(8)};
    }

`
