
import ButtonGradient from "../assets/svg/ButtonGradient"
import Benefits from "../components/Benefits"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing"
import Roadmap from "../components/Roadmap"

const Home = () => {
    

  return (
    <>
   
      <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden scroll-smooth">
        <Header />
        <Hero />
        <Benefits />
        <Roadmap />
        <Pricing />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default Home