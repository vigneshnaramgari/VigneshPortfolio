import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import LenisScroll from './components/LenisScroll'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}
