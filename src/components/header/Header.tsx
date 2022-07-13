import React from 'react'
import github from '../../assets/github.png';
import linkdin from '../../assets/linkedin.png';
import logoimg from '../../assets/bitcoin_logo.png';
import { Container, Logo, Menu, Social } from './Styles';

function Header(){
    return (
        <Container>
            <Logo>
                <span>
                    <img src={logoimg}/>
                    ITCOIN
                </span>
                <div>PREDICTION</div>
            </Logo>
            <Menu>
                <li>TODAY</li>
                <li>BY DATE</li>
                <li>BY PARAMETERS</li>
                <li>API</li>
                <li>PROJECT</li>
            </Menu>
            <Social>
                    FOLLOW ME
                    <a href='https://github.com/jclaudior' target="_blank"><img src={github}></img></a>
                    <a href='https://www.linkedin.com/in/jo%C3%A3o-claudio-b25ba5104/' target="_blank"><img src={linkdin}></img></a>
            </Social>
        </Container>
    )
}

export default Header;