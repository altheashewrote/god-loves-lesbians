import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Home = () => {
  const [firstName, setFirstName] = useState('');

  return (
    <div className="bg-black h-full min-h-screen flex">
      <div className="p-10 text-barbie text-4xl font-dot text-shadow-glow-barbie">
          <TypeAnimation
          sequence={[
            "print('hello, world!')", 500,
            "print('a really awesome thing')", 500,
            "print('our second date')", 500,
            "print('i coded this last night')", 500]}
          speed={50} 
          repeat={Infinity}
          />
        <br></br>
        <a href="https://linkedin.com/in/marir0sales" className="hover:underline">
        <TypeAnimation
        cursor={false}
        sequence={['by althea rosales', 500]}
        speed={50}
        className='text-xl font-normal'
        />
        </a>
        <br></br>
        <br></br>
        <br></br>
        <TypeAnimation
        cursor={false}
          sequence={[
            `welcome to our second date.\ni hope you have a lot of fun today.\ndon't think about the UI too much :)\n\nto log in, please enter your name. press enter when done.\n\nyour name:`, 2000,
            `or hyperfixate on the UI. idc. life is short <3`, 2000
          ]}
            
            speed={75}
            repeat={Infinity}
            className='text-xl inline-block whitespace-pre-line'/>
        <br></br>
        <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        className='p-2 text-shadow-glow-barbie text-xl border-barbie border-2 border-solid'
        />
        <br></br>
        <br></br>
        <Link to="/IntroPage"
        
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
    
  );
}

export default Home