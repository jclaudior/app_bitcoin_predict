import styled from 'styled-components';

export const Container = styled.div`
    height: 800px;
    background-color: #1B4151;

    @media(max-width: 1025px) {
        height: 1500px;
    }

    @media(max-width: 660px) {
        height: 2000px;
    }
`;


