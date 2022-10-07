import styled from 'styled-components';

export const Container = styled.div`
    padding: 50px 55px;
    color: #ED9902;
    font-size: 25px;
    font-family: Segoe UI;
    font-weight: 100;
    background-color: #023146;
    margin: 20px 0px;
    b{
        font-weight: 600;
    }
`;


export const Label = styled.label`
    font-size: 20px;
    color:  #ED9902;
    font-weight: bold;
    margin-right: 5px;
`


export const NumberInput = styled.input`
    width: 10%;
    height: 30px;
    padding-left: 10px;
    font-size: 15px;
    color:  #023146;
    font-weight: bold;
    margin-right: 10px;
    &:focus {
        outline: none;
        border:  2px #ED9902 solid;
        box-shadow: 0px 2px 5px #ED9902;
    }
   
     @media(max-width: 1025px) {
        width: 100%;
        height: 40px;
        font-size: 20px;
        margin-bottom: 10px; 
    }
`

export const SendButton = styled.a`
    padding: 5px 30px;
    color:  #023146;
    background-color: #ED9902;
    font-size: 15px;
    font-weight: bold;
    border: 0px;
    border-radius: 50px 20px;
    box-sizing : content-box;

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    @media(max-width: 1025px) {
        text-align: center;
        font-size: 20px;
        width: 100%;
        flex-direction: column;
        align-items: start;
    }
`


