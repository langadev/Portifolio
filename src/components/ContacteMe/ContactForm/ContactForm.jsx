import  './ContactForm.css'

function ContactForm() {
  return (
    <div className='contact-form-content'>
        <form>
            
           <input type="email" name="email" id="email"  placeholder='Digite seu email aqui!'/>
           <textarea name="message" rows={3} id="" placeholder='Digite a sua Mensagem aqui!'></textarea>
           <button>Enviar</button>
        </form>
    </div>
  )
}

export default ContactForm