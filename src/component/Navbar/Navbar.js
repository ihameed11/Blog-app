import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
function Navbar() {
  const user=true;
  return (
    <div className='navBar'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-pinterest-square"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
               <li className='topListItem'>
                 <Link className='link' to='/'>HOME</Link>
               </li>
               <li className='topListItem'><Link className='link' to='/'>ABOUT US</Link></li>
               <li className='topListItem'><Link className='link' to='/'>CONTACT</Link></li>
               <li className='topListItem'><Link className='link' to='/Write'>WRITE</Link></li>
               <li className='topListItem'>
                 {user&&"LOGOUT"}
               </li>


            </ul>
            
            
            
            </div>
        <div className='topRight'>
          {
            user ? ( <img  className="topImg"src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt='img'/>
            ):(
            <ul className='topList'>
            <li className='topListItem'><Link className='link' to='/Login'>LOGIN</Link></li>
           <li className='topListItem'> <Link className='link' to='/regiseter'>RIGESTER</Link></li>
            </ul>)

          }

           
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        
        
        </div>



    
    
    
    </div>
  )
}

export default Navbar