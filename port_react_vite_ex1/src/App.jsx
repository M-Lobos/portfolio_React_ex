/* Remember that jsx its a combination of HTML and Js */
import './App.css'
import Hero from './section/Hero/Hero.jsx'
import Projects from './section/projects/Projects.jsx'
import Skills from './section/Skills/Skills.jsx'
import Contact from './section/Contact/Contact.jsx'

function App() {

  return (
    console.log("testting the console log"),
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
