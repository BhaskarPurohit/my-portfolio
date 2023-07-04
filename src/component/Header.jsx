import React from 'react'
import "../styles/app.scss"
import "../styles/header.scss"

const Header = () => {
  return (
    <nav>
        
        <NavContent/>
    </nav>
    )
  
}

const NavContent =()=>{
return(
    <div>
  <h2>Bhaskar.</h2>
    <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#testimonial">Testimonials</a>
        <a href="#contact">Contact</a>
    </div>
    <a href="mailto:bhaskarpurohit22@gmail.com">
        <button>Email</button>
    </a>
    </div>
)
   
      
  
}

export default Header