import React from 'react'

function Achievements(props) {

  return (
  <div>
    
    <div className="h-84 w-84 border border-cyan-950 p-4 rounded-lg shadow-md overflow-hidden bg-amber-100">
       <h1 className="text-center text-3xl font-bold">
        {props.title}
        </h1>  <br />
       <img src="BT-logo.jpeg" alt="image" className="mx-auto mb-4" />
       <p className="text-black whitespace-normal">
        {props.description}
        </p>
    </div>  
      
  </div>
  )
}

export default Achievements
