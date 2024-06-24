import React, { useState } from 'react'
import "./Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuimg from "./menu.png"
const Navbar = () => {
  let [menu,setMenu]=useState("home")
  let [menuopen,setMenuopen]=useState(false)

  let toggleBtn=()=>{
    if(menuopen===true){
      setMenuopen(false)
    }
    else{
      setMenuopen(true)
    }
  }

  return (
    <div id='navbar' className='nav--container'>
      <h1>Harshith</h1>
      <nav>
        <ul className={menuopen?"ul-link-active":"ul-link-container"}>
          <li ><AnchorLink href='#hero' className='anchor-link' onClick={()=>{setMenu('home'); setMenuopen(false)}}>Home{menu==='home'?<p style={{borderBottom:"3px solid #c0c0c0"}}></p>:<></>} </AnchorLink></li>
          <li><AnchorLink href='#about'className='anchor-link' onClick={()=>{setMenu('about'); setMenuopen(false)}} >About {menu==='about'?<p style={{borderBottom:"3px solid #c0c0c0"}}></p>:<></>}</AnchorLink></li>
          <li><AnchorLink href='#skill' className='anchor-link' onClick={()=>{setMenu('skills'); setMenuopen(false)}}>Skills {menu==='skills'?<p style={{borderBottom:"3px solid #c0c0c0"}}></p>:<></>}</AnchorLink></li>
          <li><AnchorLink href='#project' className='anchor-link' onClick={()=>{setMenu('projects'); setMenuopen(false)}}>Projects {menu==='projects'?<p style={{borderBottom:"3px solid #c0c0c0"}}></p>:<></>}</AnchorLink></li>
          <li><AnchorLink href='#contact' className='anchor-link' onClick={()=>{setMenu('contact'); setMenuopen(false)}}>Contact {menu==='contact'?<p style={{borderBottom:"3px solid #c0c0c0"}}></p>:<></>}</AnchorLink></li>
        </ul>
      </nav>
      <img src={menuimg} onClick={toggleBtn} className='menuimg' alt="" />
    </div>
  )
}

export default Navbar