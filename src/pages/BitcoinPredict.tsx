import React from 'react';
import ContainerPredict from '../components/containerPredict/ContainerPredict';
import Header from '../components/header/Header';
import { Container } from './Styles';

function BitcoinPredict() {
    return (
      <Container>
        <Header/>  
        <ContainerPredict />
      </Container>
    );
}
  
export default BitcoinPredict;