import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useRouter } from 'next/router'

function Episode({data}) {
    const router = useRouter()
  return (
    <Epi>
      <Date>{data?.date}</Date>
      <Title>{data?.title}</Title>
      <Button variant="outline-success" size='lg' className='align-items-center d-flex justify-content-center' onClick={()=> router.push('/blog')}>
          <PlayCircleOutlineIcon fontSize="small" style={{ margin: 0 }} />
         <p className='' style={{fontSize: "13px", margin:0, marginLeft: '7px'}}> {data?.length}</p></Button>
    </Epi>
  );
}

export default Episode;

const Epi = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 20px;
`;

const Date = styled.p`
  font-size: 0.85rem;
  color: #555;
  @media (max-width: 668px) {
    font-size: 0.7rem;
  }
`;
const Title = styled.h4`
  font-size: 1.2rem;
  @media (max-width: 668px) {
    font-size: 0.92rem;
  }
`;
