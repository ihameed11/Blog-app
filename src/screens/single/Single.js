import React from 'react'
import './single.css'
import SideBar from '../../component/Sidebar/SideBar'
import SinglePost from '../../component/Singlepost/SinglePost'
function Single() {
  return (
    <div className='single'>
      <SinglePost/>
        <SideBar/>
      
    </div>
  )
}

export default Single
