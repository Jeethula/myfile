// import React, { useState } from "react";
// import "./samp.css";

// const Artists = () => {
//   const [active, setActive] = useState(0);

  

  
//         return (
//           <ul>
//           {artists.map((artist, i) => (
//             <li
//               key={i}
//               style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
//               role="button"
//               className={active === i ? 'active' : ''}
//               onClick={() => setActive(i)}
//             >
//               <h3>{artist.name}</h3>
//               <div className="section-content">
//                 <div className="inner">
//                   <div className="bio">
//                     <h2>{artist.name}</h2>
//                     <p>{artist.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       );
//         };
        
//         export default Artists;



import React, { useState } from "react";
import styled from "styled-components";

// Define styled components
const StyledUl = styled.ul`
  display: flex;
  min-height: 350px;
  height: 80vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
  width: 100%;
  min-width: 100%;
  flex-direction: column;
  color:white;

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

const StyledLi = styled.li`
  flex: 1;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  transition: all 0.35s ease;
  cursor: pointer;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  overflow: hidden;
  color:white;

  &:before {
    content: "";
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 15, 15, 0.75);
  }

  &.active {
    flex: 6;
    cursor: default;

    &:before {
      background: linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%);
    }
  }
`;

const StyledH2 = styled.h2`
  font-size: 36px;
  line-height: 36px;
  font-weight: 700;
  text-transform: uppercase;
  color:white;

  @media only screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
  }
`;

const StyledH3 = styled.h3`
  font-weight: bold;
  white-space: nowrap;
  position: absolute;
  z-index: 30;
  opacity: 1;
  top: 50%;
  left: 50%;
  transition: top 0.35s, opacity 0.15s;
  transform-origin: 0 0;
  font-size: 24px;
  text-transform: uppercase;
  transform: translate(-50%, -50%) rotate(0deg);
  color:white;

  @media only screen and (min-width: 1280px) {
    top: 100%;
    left: 50%;
    font-size: 32px;
    transform: translate(-20px, -50%) rotate(-90deg);
  }

  &.active {
    opacity: 0;
    top: 200%;
  }
`;

const StyledSectionContent = styled.div`
  position: relative;
  z-index: 30;
  opacity: 0;
  align-self: flex-end;
  width: 100%;
  transition: all 0.35s 0.1s ease-out;
  color:white;

  &.active {
    opacity: 1;
  }
`;

const StyledInner = styled.div`
  position: absolute;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  align-items: flex-end;
  left: 0;
  bottom: 0;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.25s ease-out;
  color:white;

  @media only screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: calc(100% - 340px) 300px;
    grid-column-gap: 40px;
    padding: 40px;
  }

  @media only screen and (min-width: 1280px) {
    grid-auto-flow: column;
    grid-template-columns: 460px 200px;
    grid-column-gap: 40px;
    padding: 40px;
  }

  &.active {
    opacity: 1;
  }
`;

// Artist data
const BottomInfo = () => {
  const [active, setActive] = useState(0);
  const artists=[
    {
      name: "SECE",
      description: `Our trainers are Software Engineers who got placed in a good product company, can teach concepts practically and we are not outsourcing trainers.`,      
      backgroundUrl: "https://assets.codepen.io/152347/dom-dolla.jpg"
    },
    {
      name: "BIT",
      description: `Better Tomorrow propose a new technique called the curve technique. Better students will be given more complex problems to make the best and beginners will be given additional care to make them better. We believe that "Students tomorrow will be better than today when they are with us".`,
      backgroundUrl: "https://assets.codepen.io/152347/crooked-colours.jpg"
    },
    {
      name: "KGISL",
      description: `Better Tomorrow has good contribution in Product company placements. Our students got placed in Amazon, Temenos, Freshworks, Zoho, Capegemini and etc.`,
      backgroundUrl: "https://assets.codepen.io/152347/mallrat.jpg"
    }
  ];

  return (
    <StyledUl>
      {artists.map((artist, i) => (
        <StyledLi
          key={i}
          style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
          className={active === i ? 'active' : ''}
          onClick={() => setActive(i)}
        >
          <StyledH3>{artist.name}</StyledH3>
          <StyledSectionContent className={active === i ? 'active' : ''}>
            <StyledInner className={active === i ? 'active' : ''}>
              <div className="bio">
                <StyledH2>{artist.name}</StyledH2>
                <p>{artist.description}</p>
              </div>
            </StyledInner>
          </StyledSectionContent>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default BottomInfo;
