import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Skills from "./components/Skills"
import Header from "./components/Header"
import Projects from "./components/Projects"
import { GlobalCss } from "./styles"

function App() {
  return (
    <div>
        <GlobalCss />
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
        <Footer />
    </div>
  )
}

export default App
