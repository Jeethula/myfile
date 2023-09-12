import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Courses from './Courses'
import Aboutus from './Aboutus'
import AchievementsContainer from './AchievementsContainer'
import BottomInfo from './BottomInfo'
import Course from './SmallBox'
import Card from './Course'
import Recentworks from './Recentworks'
import Gallery from './hai'


function HomePage() {

  

  return (
    <div className='bg-neutral-50 '> 
     <NavBar/>
     <Aboutus/>
     <Card/>
     {/* <marquee loop="10">
       <AchievementsContainer/>
     </marquee> */}
     {/* <Courses/> */}
     <Recentworks/>
     {/* <Gallery/> */}
     {/* <Course/> */}
     <BottomInfo />
     <br />
      <Footer/>
    </div>
  )
}

export default HomePage
