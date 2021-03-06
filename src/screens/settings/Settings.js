import React from 'react'
import SideBar from '../../component/Sidebar/SideBar'
import './settings.css'

function Settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
           <div className='settingsTitle'>
               <span className='settingsTitleUpdate'>Your Account</span>
               <span className='settingsTitleDelete'>Delete Account</span>
           </div>
           <form action=""
           className='settingsForm'>
               <label>Profile Picture</label>
               <div classnName='settingsPP'>
               <img
               className='settingsPPImg'
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            /> 
            <lable htmlFor='fileInput'>
            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </lable>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
               </div>
              < label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
           </form>
        </div>
        <SideBar/>





    </div>
  )
}

export default Settings