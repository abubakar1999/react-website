import './portfolio.css'
import Card from '../../Components/Card'

import React from 'react'
import data from './data'


export default function Portfolio() {
  return (
    <section id="portfolio">
    <h2>My Work</h2>
    <div className="work_container">
            {
              data.map(item=>(
                <Card key={item.id} className="work__card">
                <span className='work__card-icon'>{item.icon}</span>
                {/* <a>{item.link}</a> */}
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                

                </Card>
              ))
            }
        </div>
    
    </section>
  )
}

{/*  */}
// <div className="myWork_Container">
//       <div className='first_project'>
//         </div><a href="https://github.com/MuhammadQasim97/FYP-17"><h3> AutoGrader</h3></a>
//         <p>An auto assignment checking system for computer science students and professors</p>
//       </div>
//       <div className='second_project'>
//       <a href="https://github.com/abubakar1999/Text-File-compression-"><h3><AiOutlineProject/> File Compressor</h3></a>
//       <p>File compression upto 60%</p>
//       </div>
//       <div className='third_project'>
//       <a href="https://github.com/MuhammadQasim97/API"><h3><AiOutlineProject/> Goal Management System</h3></a>
//       <p>An API for AutoGrader</p>
//       </div>
//     </div>
// <a href={item.link} target='_blank'></a>