import Header from './Header';
import About from "./About";
import Products from './Products';
import Socials from './Socials';
import Footer from './Fotter'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        < About />
        <Products />
        < Socials />
        <Footer />
      </div>
    </>
  )
}

export default App
