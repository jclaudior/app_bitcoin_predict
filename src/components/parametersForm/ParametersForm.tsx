import React, { useState } from 'react'
import { Container, Label, NumberInput, SendButton } from './Styles';
import { SimpleBitcoin } from '../../models/bitcoin.interface';





function ParametersForm(props: { value: SimpleBitcoin, onChange: Function }) {
    const [parametersFormValue, setParametersFormValue] = useState<SimpleBitcoin>(props.value);
    
    return (
        <Container>
            <Label>Open:</Label>
            <NumberInput onChange={(e) => onChangeValue(e, 'open')} type="number" min="0"/>
            <Label>High:</Label>
            <NumberInput onChange={(e) => onChangeValue(e, 'high')} type="number" min="0"/>
            <Label>Low:</Label>
            <NumberInput onChange={(e) => onChangeValue(e, 'low')} type="number" min="0"/>
            <SendButton onClick={() => props.onChange(parametersFormValue)}>GET PREDICTION</SendButton>
        </Container>
    )

    function onChangeValue(e: React.ChangeEvent<HTMLInputElement>, target: keyof SimpleBitcoin) {
        let simpleBitcoin = parametersFormValue
        let value = e.target.value
        value.replace(',', '.')
        simpleBitcoin[target] = Number(e.target.value)
        setParametersFormValue(simpleBitcoin)
    }
}



export default ParametersForm;