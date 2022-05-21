import React from 'react'
import './SideBar.css'
function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
       <span className='sidebarTitle'>ABOUT ME</span>
       <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
          <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
        </div>
        <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Cimena</li>
            <li className="sidebarListItem">Tech </li>


        </ul>

       


      </div>
      <div className='sidebarItem'>
      <span className='sidebarTitle'>FOLLOW US</span>
      <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
      </div>

      </div>
    </div>
  )
}

export default SideBar
