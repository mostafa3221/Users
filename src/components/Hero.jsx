import React from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/Hero.css';

const Hero = () => {
  const Navigate = useNavigate()
  return (
      <section className='main_hader'>
        <h1>welcome in dashboard</h1>
        <button className="hero-button" onClick={() => {
            Navigate("/User") 
        }}>
            Users
        </button>
      </section>
  )
}

export default Hero
