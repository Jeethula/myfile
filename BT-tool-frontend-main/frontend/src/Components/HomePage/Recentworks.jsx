import React from 'react'
import BoxComponent from './hai'

function Recentworks() {
  return (
    <div style={{ display: 'flex' , height: '700px', width: '50%' }}>
  <div style={{ marginRight: '-630px',alignItems:'center' ,width:'1500px', backgroundImage:"url('https://cdn.dribbble.com/users/6117646/screenshots/14975149/media/8f26446e227baeb76f1ae01e8dc1c558.gif')"}}> {/* Adjust the margin as needed */}
  {/* <img src="https://cdn.dribbble.com/userupload/5953175/file/original-3e538d6676a87fe29bd6c29774e88a5f.png?resize=1504x1504&vertical=center" alt="" style={{}}/> */}
    <BoxComponent />
    <h1 style={{display:'flex',justifyContent:'center',fontSize:'35px',color:'white',backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqPQf-cmMK7cZcINJwPdIOO5cEw-VCWl-KZhEj6yWL2ExZQT7AwbwTcK5Qibf8z6xvQM&usqp=CAU")',width:'1350px' }}>Our previous works</h1>
  </div>
</div>

  )
}

export default Recentworks