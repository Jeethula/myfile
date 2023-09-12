import React from 'react'
import Achievements from './Achievements'

function AchievementsContainer() {
  return (
    <div>
        <section className='mt-20 mb-20 grid gap-4 grid-cols-3 grid-rows-1'>

            <Achievements 
               title="MERN"
               description="MongoDB, Express.js, ReactJS and Node.js are the technologies I use to build this website."  
            />

            <Achievements 
               title="fullstack"
               description = "Full stack web developer with a passion for learning new technologies and applying them to solve real world problems."  
            />

        </section>
        
        
      
    </div>
  )
}

export default AchievementsContainer
