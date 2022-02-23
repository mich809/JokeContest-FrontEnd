import React from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'


export default function Navbar() {
    const Menu = () =>(
        <> 
        <p><a href="#home">Home</a></p>
        <p><a href="#Submit">Submit a Joke</a></p>
        <p><a href="#Leaderboard">LeaderBoard</a></p>      
        </>
      )




  return (
    <div className='navbar'>
        <div className='navbar_links'>
        <div className='navbar-links-container'>
             <Menu/>
        </div>
        </div>
    
    </div>
  )
}
