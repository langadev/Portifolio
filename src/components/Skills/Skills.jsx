import { useState } from 'react'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard';
import SkillsInfoCard from'./SkillsInfoCard/SkillsInfoCard'
import './Skills.css'

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill =(data)=>{
    setSelectedSkill(data);
  };
  return (
    <section id='#skills' className='skills-container'>
<h5>
Habilidades Técnicas
</h5>
<div className="skills-content">
    <div className="skills">
        {SKILLS.map((item)=>(
          <SkillCard key={item.title}
          iconUrl={item.icon}
          title={item.title}
          isActive={selectedSkill.title=== item.title}
          onClick={()=>{
            handleSelectedSkill(item)
          }}
          />
          
        ))}
    </div>

    <div className="skills-info">
      <SkillsInfoCard 
      heading ={selectedSkill.title}
      skills ={selectedSkill.skills}/>
    </div>
</div>

    </section>
  )
}

export default Skills