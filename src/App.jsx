
import Home from "./pages/Home"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Contact from "./pages/Contact"
import LogIn from "./pages/LogIn"
import Otp from "./pages/Otp"

const App = () => {
    
  return (
    <>
   
      <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden scroll-smooth">
        <Home />   
        <Contact />
        <LogIn />
        <Otp />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App