import React from 'react'
import Header from '../../component/Header/Header'
import Posts from '../../component/Posts/Posts'
import SideBar from '../../component/Sidebar/SideBar'
import './home.css'

function Home() {
  return (
    <>
     <Header/>

    <div className="home">
       <Posts/>
       <SideBar/>
       
        </div>
        </>
  )
}

export default Home