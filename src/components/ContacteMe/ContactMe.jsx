import ContactCard from './ContactCard/ContactCard'
import ContactForm from './ContactForm/ContactForm'
import './ContactMe.css'

function ContactMe() {
  return (
    <section id='#contact'  className='contact-container'>
        <h5>
            Contactar Me
        </h5>

        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactCard iconUrl='
                /images/email-svgrepo-com.svg'
                text={'celestinacuna8@gmail.com'}
                />
                <ContactCard iconUrl='
                /images/github-svgrepo-com (2).svg'
                text='Alfredo Langa'/>
            </div>
            
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe