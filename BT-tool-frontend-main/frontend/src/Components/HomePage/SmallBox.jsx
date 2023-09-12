import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 190px;
  height: 254px;
  border-radius: 20px;
  background: #ffeb33;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;

  &:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }
`;

const StyledCardDetails = styled.div`
  color: black;
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: center;
`;

const StyledCardButton = styled.button`
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #046e1d;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;

  &:hover {
    cursor: pointer;
  }

  ${StyledCard}:hover & {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;

const StyledTextTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;

const StyledTextBody = styled.p`
  color: rgb(134, 134, 134);
`;

const CardHover = () => {
  return (
    <>
    <div style={{ textAlign: 'center' }}>
  <h2 style={{ color: '#333', fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>OUR RECENT WORKS</h2>
</div>


    <div style={{display:'flex',justifyContent:'space-evenly',marginBottom:"30px"}}>

       


    <StyledCard>
      <StyledCardDetails>
        <StyledTextTitle>SECE</StyledTextTitle>
        <StyledTextBody>MERN STACK</StyledTextBody>
      </StyledCardDetails>
      <StyledCardButton>More info</StyledCardButton>
    </StyledCard>

    <StyledCard>
      <StyledCardDetails>
        <StyledTextTitle>BIT</StyledTextTitle>
        <StyledTextBody>FULL STACK</StyledTextBody>
      </StyledCardDetails>
      <StyledCardButton>More info</StyledCardButton>
    </StyledCard>

    <StyledCard>
      <StyledCardDetails>
        <StyledTextTitle>CIT</StyledTextTitle>
        <StyledTextBody>JAVA</StyledTextBody>
      </StyledCardDetails>
      <StyledCardButton>More info</StyledCardButton>
    </StyledCard>

    </div>
    </>
  );
};

export default CardHover;


