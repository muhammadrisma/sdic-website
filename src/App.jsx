import { useState } from "react"
import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import Title from "./components/Title/Title"

const App = () => {
  const [playerState,setPlayerState] = useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
      <Title title={'Apa yang Kami Tawarkan'} subtitle={'Program Kami'}/>
        <Programs />
        <About setPlayerState={setPlayerState}/>
        <Title title={'Foto Kegiatan'} subtitle={'Galeri'}/>
        <Campus/>
        <Title title={'Hubungi Kami'} subtitle={'Kontak'} />
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App