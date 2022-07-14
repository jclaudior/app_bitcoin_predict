import React from 'react'
import { Container } from './Styles';

interface TitleProps {
    title: string
}

function TitlePage(props: TitleProps){
    return (
        <Container>
            <h1>{props.title}</h1>
        </Container>
    )
}

export default TitlePage;