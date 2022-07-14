import React from 'react'
import { Container } from './Styles';


export interface DataStaticProps {
    date: Date,
    open: number,
    high: number,
    low: number,
}

function DataStatic(props: DataStaticProps){
    return (
        <Container>
            <ul>
                <li><b>DATE: </b>{props.date.toLocaleString()}</li>
                <li><b>OPEN: </b>{props.open}</li>
                <li><b>HIGH: </b>{props.high}</li>
                <li><b>LOW: </b>{props.low}</li>
            </ul>
            
            
            
        </Container>
    )
}

export default DataStatic;