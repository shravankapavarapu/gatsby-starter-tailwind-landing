import React from "react"
import Navbar from "../component/Navbar"
import Header from "../component/Header"
import Services from "../component/Services"
import Company from "../component/Company"
import Heroes from "../component/Heroes"
import Contact from "../component/Contact"
import Footer from "../component/Footer"
import "./App.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

export default () => (
  <div className="text-gray-800 antialiased">
    <Navbar transparent />
    <main>
      <Header />
      <Services />
      <Company />
      <Heroes />
      <Contact />
      <Footer />
    </main>
  </div>
)
