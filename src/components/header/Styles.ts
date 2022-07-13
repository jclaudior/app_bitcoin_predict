import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #023146;
    color: #ED9902;
    font-family: Segoe UI;
    font-weight: bold;
    padding: 10px;

    @media(max-width: 1025px) {
        flex-direction: column;
        align-items: start;
        font-size: 20px;
    }

    @media(max-width: 660px) {
        flex-direction: column;
        align-items: start;
        font-size: 20px;
    }
`;


export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    span {
        font-size: 30px;
    }

    > div {
        font-size: 20px;
        font-weight: 400;
    }

    @media(max-width: 1025px) {
        span {
            font-size: 40px;
        }
        div {
            font-size: 30px;
            font-weight: 400;
        }

        margin-left: 20px;
    }

    @media(max-width: 660px) {
        span {
            font-size: 40px;
        }
        div {
            font-size: 30px;
            font-weight: 400;
        }
    }
`;

export const Menu = styled.ul`
    list-style:none;
    display: flex;
    > li {
        position: relative;
        float: left;
        margin: 0px 20px;

        &:hover{
            opacity: 0.7;
        }
    }

    @media(max-width: 1025px) {
        justify-content: start;
        padding: 0px;
        margin: 40px 0px;
    }

    @media(max-width: 660px) {
        flex-direction: column;
        align-items: start;
        padding: 0px;
        li {
            margin: 5px 0px;
            padding: 20px 40px;
            width: 100%;
            border: 1px solid #ED9902;
        }
        margin-left: 20px;
    }
`;

export const Social = styled.div`
   width: 200px;
   display: flex;
   align-items: center;
   height: 70px;
   font-size: 15px;
   font-weight: 300;
    > a {
        margin: 0px 5px;
    }

    @media(max-width: 1025px) {
        justify-content: start;
        padding: 0px;
        margin-left: 20px;
        span {
            display: none;
        }

        .icon{
            width: 50px;
            height: 50px;
        }

        a{
            margin-right: 10px;
        }
    }
`;



