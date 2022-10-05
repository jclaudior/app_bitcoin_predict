import styled from 'styled-components';

export const ContentData = styled.div`
    color: #ED9902;
`;


export const BodyData = styled.div`
    background-color: #023146;
    padding: 20px 55px; 
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 1025px) {
        flex-direction: column;
        align-items: start;
    }

    @media(max-width: 660px) {
        flex-direction: column;
        align-items: start;
    }
`;