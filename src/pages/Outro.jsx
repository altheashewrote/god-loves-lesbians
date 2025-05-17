import React from 'react'
import GlitchLine from '../components/GlitchLine'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'

const Outro = () => {
  return (
    <div className="bg-black h-full min-h-screen flex">
        <div className="p-10 text-barbie font-dot text-shadow-glow-barbie text-xl">
            <GlitchLine text="thanks for watching <3 press enter to start from the beginning, or hover for cool effects!"/>
            <br></br>
            <br></br>
            <GlitchLine text="language: html, css, javascript" className="text-lg"/>
            <GlitchLine text="library: react.js" className="text-lg"/>
            <GlitchLine text="technology: visual studio code" className="text-lg"/>
            <br></br>
            <br></br>
            <GlitchLine text="created on: 16 may 2025" className="text-lg"/>
            <GlitchLine text="references: tree data structures, linked lists, object oriented programming, python3" className="text-lg"/>
            <GlitchLine text="by: marisol althea almencion rosales (she/they)" className="text-lg"/>

            <br></br>
            <br></br>
            <br></br>
            <Link to="/"
        
            className="text-xl text-hackergreen text-shadow-glow-hack my-20 hover:underline">
            <TypeAnimation
             sequence={['print("enter")', 500]}
            speed={50}
            />
            </Link>
            <div className="text-lg">
                <br></br>
                <br></br>
                <a href="https://linkedin.com/in/marir0sales" className="hover:underline">linkedin</a>
                <br></br>
                <a href="https://instagram.com/altheashewrote" className="hover:underline">insta</a>
                <br></br>
                <a href="https://github.com/altheashewrote/god-loves-lesbians" className="hover:underline">github</a>
            </div>
        </div>
    </div>
  )
}

export default Outro