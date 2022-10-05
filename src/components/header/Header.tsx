import React from 'react'
import github from '../../assets/github.png';
import linkdin from '../../assets/linkedin.png';
import logoimg from '../../assets/bitcoin_logo.png';
import { Container, Logo, Menu, Social, StyledLink, StyledLinkExternal } from './Styles';

function Header(){
    return (
        <Container>
            <Logo>
                <a>
                <span>
                    <img src={logoimg}/>
                    ITCOIN
                </span>
                <div>PREDICTION</div>
                </a>
            </Logo>
            <Menu>
                <li><StyledLink to="/">TODAY</StyledLink></li>
                <li><StyledLink to="/bydate">BY DATE</StyledLink></li>
                <li><StyledLink to="/byparameters">BY PARAMETERS</StyledLink></li>
                <li><StyledLinkExternal href='https://hr-bitcoin-predict.herokuapp.com/swagger-ui/index.html' target='_blank'>API</StyledLinkExternal></li>
                <li><StyledLinkExternal href='#'>PROJECT</StyledLinkExternal></li>
            </Menu>
            <Social>
                    <span>FOLLOW ME</span>
                    <a href='https://github.com/jclaudior' target="_blank"><img className='icon' src={github}></img></a>
                    <a href='https://www.linkedin.com/in/jo%C3%A3o-claudio-b25ba5104/' target="_blank"><img className='icon' src={linkdin}></img></a>
            </Social>
        </Container>
    )
}

export default Header;