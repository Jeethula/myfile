import React from 'react'

function Courses() {

    const greenButtonStyle = {
         backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        transition: 'background-color 0.3s',
        fontFamily: "Gill Sans, sans-serif",
        fontSize: '18px',
      
      };

    
  return (
    <div>

     
    <div className='bg-amber-100'>
        <section className='mt-20 mb-20 ml-12 grid gap-4 grid-cols-3 grid-rows-1'>

        <div className="h-96 w-96 border border-cyan-950 p-4 rounded-lg shadow-md overflow-hidden bg-[url('https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')]">
       <h1 className="text-center text-3xl font-bold">
        Topic
        </h1>  <br />
       <img src="BT-logo.jpeg" alt="image" className="mx-auto mb-4" />
       <p className="text-black whitespace-normal">
        sample content 
        </p>

    <center><button style={greenButtonStyle}> Register now</button></center>
    </div>  

    <div className="h-96 w-96 border border-cyan-950 p-4 rounded-lg shadow-md overflow-hidden bg-yellow-200">
       <h1 className="text-center text-3xl font-bold">
        Topic
        </h1>  <br />
       <img src="BT-logo.jpeg" alt="image" className="mx-auto mb-4" />
       <p className="text-black whitespace-normal">
        sample content 
        </p>

        <center><button style={greenButtonStyle}> Register now</button></center>
    </div>  

    <div className="h-96 w-96 border border-cyan-950 p-4 rounded-lg shadow-md overflow-hidden bg-yellow-200">
       <h1 className="text-center text-3xl font-bold">
        Topic
        </h1>  <br />
       <img src="BT-logo.jpeg" alt="image" className="mx-auto mb-4" />
       <p className="text-black whitespace-normal">
        sample content 
        </p>

        <center><button style={greenButtonStyle}> Register now</button></center>
    </div>  


        </section>

        </div>
      
    </div>
  )
}

export default Courses
