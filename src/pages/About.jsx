import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-black h-full min-h-screen flex">
        <div className="p-10 text-hydrangea text-lg font-dot text-shadow-glow-white">
            <TypeAnimation
            className="whitespace-pre-line inline-block w-150"
            sequence={[`words = *omitted for data abstraction, please don't violate the abstraction barrier*\n\nfor x in words:\n....print(x)
            \n>>> you're here because you're about to go on the best adventure yet.
            \nstarting with sinners, and ending with a photoshoot at your new favourite spot. (yes, i really do know a spot.)
            \nyou'll be amazed, laugh, and maybe channel your inner big back along the way. with a fem like me, you're in for a ride.
            \nlet's just hope there's more cops so we can flip them off. i feel like we haven't
            shown them enough how much we don't f*ck with them.`, 500]}
            speed={80}
            />
            <br></br>
            <br></br>
            <br></br>
            <Link to="/MoreOfMe">
            <TypeAnimation
            sequence={["wait... who are you?"]}
            className="hover:underline"/>
            </Link>
        </div>
    </div>
  )
}

export default About