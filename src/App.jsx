import Navbar from './components/Navbar/Navbar'


import './App.css'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import ContactMe from './components/ContacteMe/ContactMe'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <div className="container">
      <Hero/>
      <Skills/>
      <WorkExperience/>
      <ContactMe/>
     </div>
     <Footer/>
    </>
    
  )
}

export default App
