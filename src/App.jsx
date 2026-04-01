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

  // ✅ cart as array of premium objects
  const [cart, setCart] = useState([])

  // total price
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  // remove item
  const handleDeleteSelectedPremiums = (premium) => {
    setCart(prev => prev.filter(item => item.id !== premium.id))
    toast(`${premium.name} removed`)
  }

  // checkout
  const handleCheckout = () => {
    setCart([])
    toast.success("Checkout successful")
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

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="mt-6 flex justify-end gap-4 items-center px-6">
          <div className="p-4 bg-gray-800 text-white rounded-xl shadow">
            <h2 className="text-xl font-semibold">
              Total: ${total.toFixed(2)}
            </h2>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}

      <StepsSection />
      <PricingSection />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
