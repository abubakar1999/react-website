import './header.css'
import React from 'react'
import data from './data'
import headerProfile from '../../assets/header.jpg'

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={headerProfile} alt="header pic" />
        </div>
        <h3>Rana Abubakar Khan</h3>
        <p>You are a click away from fulfilling your dream by creating your
         own business website or portfolio.I am providing
         all kind of services related to web development and data science</p>
         <div className="header__cta">
           <a href="#contact" className='btn primary'>Lets talk</a>
           <a href="#portfolio" className='btn light'>My Work</a>
         </div>
         <div className="header__socials">
           {
             data.map(item=><a key={item.id} href={item.link} target='_blank'
               rel='noopener noreferrer'>{item.icon}</a>)
           }
         </div>
      </div>

      
    </header>
  )
}

export default Header