import React, { useState } from 'react'
import {TailSpin} from "react-loader-spinner";
import moment, { Moment } from 'moment'

import { Container, DateInput, SendButton } from './Styles';





function DateForm(props: { value: Moment, onChange: Function }) {
    const [dateFormValue, setDateFormValue] = useState<Moment>(props.value);
    moment.locale('pt-BR')
    return (
        <Container>
            <DateInput type="date" value={moment(dateFormValue).format('YYYY-MM-DD')} onChange={(e) => { 
                console.log(e.target.value)
                setDateFormValue(moment(e.target.value)) }} />
            <SendButton onClick={() => props.onChange(
                dateFormValue
            )}>GET PREDICTION</SendButton>
        </Container>
    )
}



export default DateForm;