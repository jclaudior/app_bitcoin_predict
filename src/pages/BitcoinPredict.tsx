import React, { useEffect, useState } from 'react';
import ContainerPredict from '../components/containerPredict/ContainerPredict';
import Header from '../components/header/Header';
import TitlePage from '../components/titlePage/TitlePage';
import BitcoinPredictType from '../models/bitcoin.interface';
import { BitcoinPredictService } from '../services/bitcoint.service';
import { Container } from './Styles';

function BitcoinPredict() {
    return (
      <Container>
        <Header/>
        <TitlePage title="TODAY"/>   
        <ContainerPredict />
      </Container>
    );
}
  
export default BitcoinPredict;