import React, { useEffect, useState } from 'react';
import './hai.css'; // Import your CSS styles


const BoxComponent = () => {
  const [showBoxes, setShowBoxes] = useState(false);

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = window.innerHeight / 5 * 4;
      const boxes = document.querySelectorAll('.box');

      boxes.forEach((box, idx) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', checkBoxes);
    checkBoxes();

    return () => {
      window.removeEventListener('scroll', checkBoxes);
    };
  }, []);

  return (
    <div>
      {/* <h1>Scroll to See the Boxes</h1> */}
      <div className={`box ${showBoxes ? 'show' : ''}`} style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center',fontSize:'20px' }}> Affordable price</div>
      <div className={`box ${showBoxes ? 'show' : ''}`} style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center',fontSize:'20px' }}> experienced trainees</div>
      <div className={`box ${showBoxes ? 'show' : ''}`} style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' ,fontSize:'20px'}}> easy going </div>
      {/* <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div>
      <div className={`box ${showBoxes ? 'show' : ''}`}></div> */}
      {/* <img src="https://cdn.dribbble.com/userupload/5953175/file/original-3e538d6676a87fe29bd6c29774e88a5f.png?resize=1504x1504&vertical=center" alt="" style={{width:'800px',height:'1200px',paddingLeft:'600px',paddingBottom:'1000px'}}/> */}
     
    </div>
    
  );
};

export default BoxComponent;


// paddingLeft:'600px',paddingBottom:'1000px'