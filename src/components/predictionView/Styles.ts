import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ED9902;
    font-size: 25px;
    font-family: Segoe UI;
    font-weight: 100;
    width: 60%;
    border-right: 1px solid #ED9902;
    b{
        font-weight: 600;
    }
    >img{
        margin-top: 10px;
        width: 30%
    }

    @media(max-width: 1025px) {
        width: 100%;
        border-right: 0px solid #ED9902;
        border-top: 1px solid #ED9902;
        align-items: start;
    }
`;


