

import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'

import Navbar from './components/Navbar/Navbar'
import PricingSection from './components/PricingSections/PricingSection'
import Stats from './components/stats/Stats'
import StepsSection from './components/StepsSection/StepsSection'



function App() {
 

  return (
    <>
    <Navbar />
    <Banner />
    <Stats />
    <StepsSection />
    <PricingSection />
    <Footer />
      
    </>
  )
}

export default App
