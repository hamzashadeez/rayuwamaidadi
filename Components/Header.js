import React from "react";
import styled from "styled-components";
import Link from "next/link";
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
function Header() {
  return (
    <Container>
      {/* <Image src={Logo} width={70} height={70} className='shadow-sm' /> */}
      <Logo>
       <SettingsVoiceIcon fontSize="large" style={{ color: '#009688' }} />
       <Title>Rayuwa Mai Dadi</Title>
      </Logo>
      <UList>
        <li style={{fontWeight: "bold"}}> 
          <Link href="/" >Episodes</Link>
        </li>
        <li style={{fontWeight: "bold"}}>
          <Link href="/blog">Blog</Link>
        </li>
        <li style={{fontWeight: "bold"}}>
          <Link href="/about">About</Link>
        </li>
      </UList>
    </Container>
  );
}

const Container = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  li:first-child {
    margin-left: 0;
  }
  li {
    list-style: none;
    margin-left: 25px;

    a {
      color: #009688;
      text-decoration: none;
      cursor: pointer;
      font-size: 1.04rem;
    }
  }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
    margin-bottom: 40px;
    margin-top: 40px;
  } 
`

const UList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
`;

const Title = styled.p`
color: #009688;
text-transform: uppercase;
margin: 0;
font-weight: bold;
letter-spacing: 1.52px;
font-size: 2rem;
@media (max-width: 668px) {
  font-size: 1.2rem;
  }

`
export default Header;

