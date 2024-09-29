
import reactICon from '/images/react-svgrepo-com.svg';
import perfil from '/images/profile1.jpg';
import htmlICon from '/images/html-5-svgrepo-com.svg';
import cssIcon from '/images/css-3-svgrepo-com.svg';
import jsIcon from '/images/js-official-svgrepo-com.svg';
import nodejsIcon from '/images/node-js-svgrepo-com.svg'
import java from '/images/spring-svgrepo-com.svg'
import php from '/images/php-svgrepo-com(1).svg'

import  './Hero.css'
function Hero() {
  return (
    <section className='hero-container'>
      <div className="hero-content">
      <h2> olá Eu Sou alfredo langa</h2>
      <p>
      Sou um desenvolvedor full-stack apaixonado por criar experiências digitais que não apenas atendem às necessidades dos usuários, mas também os inspiram. Transformo ideias em soluções web intuitivas e visualmente deslumbrantes com uma abordagem centrada no usuário. Minha jornada é marcada pela busca incessante de excelência e inovação, sempre com o objetivo de proporcionar experiências digitais inesquecíveis.
      </p> 
       </div>
      <div className="hero-img">
        <div>
    <img src={perfil} alt=""  />
        </div>

        <div>
        <div className="tech-icon">
          <img src={htmlICon} alt="" />
        </div>
        
        <div className="tech-icon">
          <img src={cssIcon} alt="" />
        </div>

        <div className="tech-icon">
          <img src={jsIcon} alt="" />
        </div>
        <div className="tech-icon">
          <img src={reactICon} alt="" />
        </div>
      </div>

      <div>
        <div className="tech-icon">
          <img src={nodejsIcon} alt="" />
        </div>
        
        <div className="tech-icon">
          <img src={java} alt="" />
        </div>

        <div className="tech-icon">
          <img src={php} alt="" />
        </div>
       
      </div>
      </div>
    </section>
  )
}

export default Hero