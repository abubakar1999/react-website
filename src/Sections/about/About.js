import './about.css'
import CV from '../../assets/Resume Abubakar.pdf'
import about from '../../assets/about.jpg'
import {BsDownload} from 'react-icons/bs'
import './data'
import Card from '../../Components/Card'
import data from './data'
function About() {
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={about} alt="My pic" />
          </div>
        </div>
        <div className="about__right">
        <h2>About Me</h2>
        <div className="about__cards">
            {
              data.map(item=>(
                <Card key={item.id} className="about__card">
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>

                </Card>
              ))
            }
        </div>
          <p>
          Your “About me” page forms the first impression of a company or product, puts a name and
           a face to your business, and gives website visitor the opportunity to develop a connection
            with you a good reason for a visitor to stay on your website!,
             and it is your best 
          chance to convert more visits to enquiries/more enquiries to customers.
          </p>
          <p>
          About me page is a space for individuality and
           originality, it is an important marketing tool that should convince.
            Therefore,
           they are very different!
          </p>
          
            <a href={CV} download className='btn primary'>Download CV <BsDownload/></a>
          
        </div>
      </div>
    </section>
  )
}

export default About