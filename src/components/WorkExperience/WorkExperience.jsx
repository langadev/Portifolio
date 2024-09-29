import { useRef } from 'react';
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import './WorkExperience.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WorkExperience() {
    const sliderRef = useRef();

    const settings = {
        dots: false, 
        infinite: true, 
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false, 
        responsive: [{
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        }]
      };
      const nextSlide =()=>{
        sliderRef.current.slickNext();
      }
      const prevSlide=()=>{
        sliderRef.current.slickPrev()
      }
    return (
        <section id='#experience'  className='experience-container'>
        <h5>Work Experience</h5>
        <div className="arrow-right" onClick={nextSlide}><span className='material-symbols-outlined'>chevron_right</span></div>
        <div className="arrow-left" onClick={prevSlide}><span className='material-symbols-outlined'>chevron_left</span></div>
         
        <div className="experience-content">
         <Slider ref={sliderRef} {...settings}>
                {WORK_EXPERIENCE.map((item) => (
                    
                    <ExperienceCard
                        key={item.title}
                        details={item}
                       
                    />
               
                ))}
           </Slider>
        </div>
       
    </section>
    );
}

export default WorkExperience;
