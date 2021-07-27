import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

function Header() {
    return (
        <Container>
            <Logo>
                Rayuwa Mai Dadi
            </Logo>
            <UList>
                <li><Link href='/'>Episodes</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
                <li><Link href='/about'>About</Link></li>
            </UList>
        </Container>
    )
}

export default Header

const Container = styled.div`
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    @media (max-width: 668px) {
    flex-direction: column;
  }

    li:first-child{
        margin-left: 0;
    }
    li{
        list-style: none;
        margin-left: 25px;

        a{
            color: #009688;
            text-decoration: none;
            cursor: pointer;
            font-size: 1.04rem;
        }
    }
    
`

const Logo = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    color: #009688;
    letter-spacing: 1px;
    font-size: 1.2rem;
`

const UList = styled.ul`
    display: flex;
    align-items: center;
    padding: 0;
`