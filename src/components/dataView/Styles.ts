import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px 0px;
    color: #ED9902;
    font-size: 25px;
    font-family: Segoe UI;
    font-weight: 100;
    width: 20%;
    border-right: 1px solid #ED9902;
    >ul {
        list-style:none;
        padding: 0px;
        margin: 0px;
        >li{
            margin: 10px 0px;
        }
    };

    b{
        font-weight: 600;
    }

    @media(max-width: 1025px) {
        width: 100%;
        border-right: 0px solid #ED9902;
    }
`;


