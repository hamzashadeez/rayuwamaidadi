import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Header() {
  return (
    <Container>
      {/* <Image src={Logo} width={70} height={70} className='shadow-sm' /> */}
      <Logo>
        <svg
          style={{
            fill: "#009688",
            width: "4rem",
            margin: 0,
            padding: 0,
            height: "4rem",
          }}
          id="Capa_1"
          enable-background="new 0 0 512 512"
          height="512"
          viewBox="0 0 512 512"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m408.429 239.071c0-8.284-6.716-15-15-15s-15 6.716-15 15c0 67.507-54.921 122.429-122.429 122.429s-122.429-54.921-122.429-122.429c0-8.284-6.716-15-15-15s-15 6.716-15 15c0 78.988 60.394 144.131 137.429 151.69v30.988h-15.125c-41.493 0-75.25 33.757-75.25 75.25 0 8.284 6.716 15 15 15h180.75c8.284 0 15-6.716 15-15 0-41.493-33.757-75.25-75.25-75.25h-15.125v-30.988c77.035-7.559 137.429-72.702 137.429-151.69z" />
            <path d="m211.87 150.625c8.284 0 15 6.716 15 15s-6.716 15-15 15h-46.182v30.25h46.182c8.284 0 15 6.716 15 15s-6.716 15-15 15h-46.182v.063c0 49.798 40.514 90.312 90.313 90.312s90.313-40.514 90.313-90.312v-.063h-46.184c-8.284 0-15-6.716-15-15s6.716-15 15-15h46.182v-30.25h-46.182c-8.284 0-15-6.716-15-15s6.716-15 15-15h46.182v-30.25h-46.182c-8.284 0-15-6.716-15-15s6.716-15 15-15h46.182v-.062c.001-49.799-40.514-90.313-90.312-90.313s-90.313 40.514-90.313 90.313v.062h46.182c8.284 0 15 6.716 15 15s-6.716 15-15 15h-46.182v30.25z" />
          </g>
        </svg>
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
  @media (max-width: 668px) {
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
    @media (max-width: 668px) {
    margin-bottom: 40px;
    margin-top: 40px;
  } 
`

const UList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
`;
export default Header;

