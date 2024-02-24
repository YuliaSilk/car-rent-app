import styled from "styled-components";

export const BtnLoadMore = styled.button`
    width: 274px;
    height: 44px;
    background: transparent;
    color: ${p => p.theme.colors.main};
    font-size: 16px;
    line-height: 1.2;
    
    border-radius: ${p => p.theme.radius.m};
    border-color: ${p => p.theme.colors.main};
`