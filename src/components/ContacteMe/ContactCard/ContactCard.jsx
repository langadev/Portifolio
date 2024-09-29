

import './ContactCard.css'
function ContactCard({iconUrl,text}) {
  return (
    <div className='contact-details-card'>  
<div className="icon">
    <img src={iconUrl} alt=""  />
</div>
<p>{text}</p>
    </div>
  )
}

export default ContactCard