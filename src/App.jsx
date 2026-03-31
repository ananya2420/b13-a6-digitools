
import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'


import Navbar from './components/Navbar/Navbar'
import PricingSection from './components/PricingSections/PricingSection'
import Stats from './components/stats/Stats'
import StepsSection from './components/StepsSection/StepsSection'
import { Premium } from './components/homepage/Premium/Premium'
import { Suspense } from 'react'

const fetchPremium=async()=>{
  const res=await fetch("/data.json");
  return res.json();
}

function App() {
 const premiumPromise=fetchPremium();

 
  return (
    <>
    <Navbar />
    <Banner />
    <Stats />
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <Premium premiumPromise={premiumPromise} />
    </Suspense>
    <StepsSection />
    <PricingSection />
    <Footer />
      
    </>
  )
}

export default App
