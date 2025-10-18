import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Listings from './components/Listings'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Affiliations from './components/Affiliations'

export default function App(){
  return (
    <div className="font-sans text-slate-900 antialiased">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Listings />
        <Services />
        <Gallery />
        <Testimonials />
         <Affiliations /> 
        <Contact />
        
      </main>
      
      <Footer />
    </div>
  )
}
