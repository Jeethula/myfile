import React from 'react'
import image from './elearning-862x575-removebg-preview.png';


function Aboutus() {
  return (
<div style={{backgroundImage:"url(https://cdn.dribbble.com/users/2156796/screenshots/19992280/media/7d2ee3a4d15d1f335419059066067694.gif)"}}>
  {/* <div style={{ display: 'flex', height: '60vh' }}>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#333', color: '#fff', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>Empowering Tech Careers</h1>
      <h2 style={{ fontSize: '1.5rem', textAlign: 'center' }}>Explore Software & Web Development</h2>
    </div>
    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <img src="https://cdn.dribbble.com/userupload/3883210/file/original-ca741084d471cbceb1eb01b8dc22bdf9.jpg?resize=752x" alt="img" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  </div> */}
  <div style={{
      // width:'1400px',
      height:'600px'
              }}>
                
                <div style={{
                  paddingLeft: '100px',
                  paddingTop: '230px'
                }}>
                  <h1 style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Arial, sans-serif',fontSize:'40px'}}>
                     This is new
                  </h1>
                  <h1 style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Arial, sans-serif',fontSize:'40px' }}>
                  Welcome to new website
                  </h1>
                </div>
                <div style={{
                 marginLeft:'750px',
                marginTop:'-350px'
                 
                }}>
                  <img src={image} alt="Image" style={{height:'500px',width:'600px'}} />
                  
                </div>
  </div>
</div>


  )
}

export default Aboutus
