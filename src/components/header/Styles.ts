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
`;


export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    > span {
        font-size: 30px;
    }

    > div {
        font-size: 20px;
        font-weight: 400;
    }
`;

export const Menu = styled.ul`
    list-style:none;
    > li {
        position: relative;
        float: left;
        margin: 0px 20px;

        &:hover{
            opacity: 0.7;
        }
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
`;



