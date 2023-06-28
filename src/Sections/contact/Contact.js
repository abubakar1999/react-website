import './contact.css'
import whatsapp from '../../assets/whatsapp.png'
import messanger from '../../assets/messanger.png'

function Contact() {
  return (
    <section id='contact'>
    <h2>Contact</h2>
    <div className='upper'>
    <div className="whatsapp">
    <h2>Chat on Whatsapp</h2>
    <a href="https://wa.me/923060482280" target="_blank" width="10" height="10"><img src={whatsapp} alt="whatsApp"/></a>
    </div>
    </div>
    </section>
  )
}

export default Contact