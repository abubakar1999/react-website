import './services.css'
import data from './data'
import React from 'react'
import Card from '../../Components/Card'

function Services() {
  return (
    <section id="services">
    <h2>My Services</h2>
    <p>I provide best solutions in below mentioned services </p>
    <div className="container services__container">
      {
        data.map(item=>(
          <Card key={item.id} className="service light">
            <div className="service__icon">
              {item.icon}
            </div>
            <div className="service__details">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))
      }
    </div>
    </section>
  )
}

export default Services