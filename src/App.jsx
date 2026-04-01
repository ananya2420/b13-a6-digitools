import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Navbar from './components/Navbar/Navbar'
import PricingSection from './components/PricingSections/PricingSection'
import Stats from './components/stats/Stats'
import StepsSection from './components/StepsSection/StepsSection'
import { Premium } from './components/homepage/Premium/Premium'
import { Suspense, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const fetchPremium = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

function App() {
  const premiumPromise = fetchPremium()


  const [cart, setCart] = useState([])

 

  // remove item
  const handleDeleteSelectedPremiums = (premium) => {
    setCart(prev => prev.filter(item => item.id !== premium.id))
    toast(`${premium.name} removed`)
  }

 

  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Stats />

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Premium
          premiumPromise={premiumPromise}
          cart={cart}
          setCart={setCart}
        />
      </Suspense>

     

      <StepsSection />
      <PricingSection />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
