import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Nav/>
      <Hero></Hero>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
