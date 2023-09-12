import React from 'react';
import styled from 'styled-components';
import react from '../remove.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  background: #13133;
  border: 2px solid #fff; /* Border color */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s; /* Add a transition effect on the transform property */
  
  &:hover {
    transform: scale(1.15); /* Scale up the element on hover */
  }
`;

const CardContainer = styled.div`
  position: relative;
`;

const Card = styled.div`
  position: relative;
  width: 320px;
  height: 450px;
  background: #ffffff;//white
  border-radius: 20px;
  overflow: hidden;
  transition: 0.5s ease-in-out;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0f0f0f;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:hover:before {
    clip-path: circle(300px at 80% -20%);
  }
`;

const ImgBx = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
  width: 100%;
  height: 220px;
  transition: 0.5s;

  ${Card}:hover & {
    top: 0%;
    transform: translateY(0%);
  }
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ;
  width: 270px;
`;

const ContentBx = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;

  ${Card}:hover & {
    height: 210px;
  }
`;

const Heading2 = styled.h2`
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #0f0f0f;
  margin: 0;
`;

const Size = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
  padding-top: 0;
  padding-bottom: 0;

  ${Card}:hover & {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }
`;

const Color = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
  padding-top: 0;
  padding-bottom: 0;

  ${Card}:hover & {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
  }
`;

const ColorSpan = styled.span`
  width: 20px;
  height: 20px;
  background: ${props => props.color || '#0f0f0f'};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;

  &:nth-child(2) {
    background: #0f0f0f;
  }

  &:nth-child(3) {
    background: #0f0f0f;
  }

  &:nth-child(4) {
    background: #0f0f0f;
  }
`;

const Link = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: #0f0f0f;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #fff;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  margin-top: 0;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;
  }
`;

export default function Course() {
  return (

  <>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgrVNS8IdQQLbKAWjY2YkoZq6Os1UAkDmDUWP5S-Kqr7TCjaqRUp97CEILo9pQLuzdA&usqp=CAU" alt="image" style={{height:'100px',width:'1500px'}} />
      </div>

    <div style={{ textAlign:'end',marginTop:'-90px',marginRight:'200px' }}>
  <h2 style={{ color: '#333', fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>"Keep Believing, 🚀 Succeed!"</h2>
</div>

{/* <h1 style={{display:'flex',justifyContent:'center',marginTop:'45px',fontSize:'35px',color:'white',backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqPQf-cmMK7cZcINJwPdIOO5cEw-VCWl-KZhEj6yWL2ExZQT7AwbwTcK5Qibf8z6xvQM&usqp=CAU")',width:'1350px' }}>Courses</h1> */}


<div style={{backgroundImage:"url('https://cdn.dribbble.com/users/149180/screenshots/3137225/particles.gif')",height:'730px'}}>


    <div style={{display:'flex',justifyContent:'space-evenly',paddingTop:'100px'}}>
    <Container>
      <CardContainer>
        <Card>
          <ImgBx>
            <Img src="https://cdn-icons-png.flaticon.com/512/9414/9414296.png" alt="Nike Shoes" style={{height:'100px',width:'120px'}} />
          </ImgBx>
          <ContentBx>
            <Heading2>FRAMEWORK</Heading2>
            <Size>
            <p style={{ color: '#0f0f0f' }}>
                <span >Any programming language such as C, CPP, Java, Python, Javascript, Pearl, Ruby and etc. We will handle it from the scratch and students will be able to do programming on their own.</span>
                </p>
            </Size>
            <Link href="#">Start Now</Link>
          </ContentBx>
        </Card>
      </CardContainer>
    </Container>

    <Container>
      <CardContainer>
        <Card>
          <ImgBx>
          <Img src="https://cdn-icons-png.flaticon.com/512/9421/9421287.png" alt="Nike Shoes" style={{height:'100px',width:'120px'}} />
          </ImgBx>
          <ContentBx>
            <Heading2>DSA</Heading2>
            <Size>
            <p style={{ color: '#0f0f0f' }}>
                <span >Any programming language such as C, CPP, Java, Python, Javascript, Pearl, Ruby and etc. We will handle it from the scratch and students will be able to do programming on their own.</span>
                </p>
            </Size>
            <Link href="#">Start Now</Link>
          </ContentBx>
        </Card>
      </CardContainer>
    </Container>

    <Container>
      <CardContainer>
        <Card>
          <ImgBx>
          <Img src="https://i0.wp.com/bradan.co/wp-content/uploads/2017/05/icon-blue-website-design-development.png?fit=256%2C257&ssl=1" alt="Nike Shoes" style={{height:'100px',width:'120px'}} />
          </ImgBx>
          <ContentBx>
            <Heading2>JAVA</Heading2>
            <Size>
            <p style={{ color: '#0f0f0f' }}>
                <span >Any programming language such as C, CPP, Java, Python, Javascript, Pearl, Ruby and etc. We will handle it from the scratch and students will be able to do programming on their own.</span>
                </p>
            </Size>
            <Link href="#">Start Now</Link>
          </ContentBx>
        </Card>
      </CardContainer>
    </Container>
    </div>
    <div style={{display:"flex",justifyContent:'space-evenly',paddingTop:'20px'}}>
    <img src="https://cdn.dribbble.com/userupload/5953181/file/original-04156948930b39f3040ac4d182a65d56.png?resize=1504x1504&vertical=center" alt="" style={{width:"200px"}} />
    <h1 style={{ paddingTop: '100px', fontSize: '30px', color: 'black', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontStyle: 'italic' }}>Key Highlights</h1>    <img src="https://cdn.dribbble.com/userupload/5953179/file/original-9040d902660f9fc8c6d12416bf3a09b8.png?resize=1504x1504&vertical=center" alt="" style={{width:"200px"}} />
    </div>
    </div>
    
    </>
  );
}
