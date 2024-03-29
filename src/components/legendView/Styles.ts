import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px 0px;
    color: #ED9902;
    font-size: 25px;
    font-family: Segoe UI;
    font-weight: 100;
    width: 15%; 
    >div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .img_ico{
        margin-top: 10px;
        width: 20%
    }

    @media(max-width: 1025px) {
        width: 100%;
        border-right: 0px solid #ED9902;
        border-top: 1px solid #ED9902;

        >div{
            display: flex;
            align-items: center;
            justify-content: start;
        }

        .img_ico{
            margin-top: 10px;
            width: 10%
        }
    }
    
`;

export const Label = styled.div`
    padding: 10px 10px;
    width: 100px;
    font-weight: 500;
`;

