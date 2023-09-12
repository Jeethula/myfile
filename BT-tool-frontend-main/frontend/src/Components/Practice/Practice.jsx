import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
import Compiler from './Compiler';
import StickyHeadTable from './Table';

function Practice() {


  return (
    <>
    <div>
      
      <NavBar />

      <Compiler/>
      {/* <Footer /> */}
    </div>
    {/* <div style={{marginTop:'500px'}}><StickyHeadTable/></div> */}
    </>
  );
}

export default Practice;
