import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom';

const IntroPage = () => {
  return (
    <div className="bg-black h-full min-h-screen flex">
        <div className="p-10 text-barbie text-lg font-dot text-shadow-glow-barbie">
            <TypeAnimation
            sequence={[`dates = Link('5/5/2025', Link('5/16/2025'))\n# a linked list containing some dates
                \n\ndef second_date(d):\n....if d is Link.empty:\n........return False\n....if d.first == '5/16/2025':\n........return True\n....else:\n........return second_date(d.rest)
                \n\n>>> second_date(dates)\nTrue`, 900,
              `colours used:\n\nhydrangea: #fff5c4\nbarbie: #ff4592\nhacker green: #a6ff7a\ncornflower: #598eff`, 500]}
            speed={80}
            deletionSpeed={99}
            className='text-hackergreen text-shadow-glow-hack whitespace-pre-line text-lg'
            />
            <br></br>
            <br></br>
            <br></br>
            <Link to="/About">
            <TypeAnimation
            sequence={["umm... what's this about?"]}
            className="hover:underline"/>
            </Link>
        </div>
    </div>
  );
};

export default IntroPage