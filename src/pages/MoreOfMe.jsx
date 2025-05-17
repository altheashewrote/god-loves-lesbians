import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'

const MoreOfMe = () => {
  return (
    <div className="bg-black h-full min-h-screen flex">
        <div className="p-10 text-cornflower text-lg font-dot text-shadow-glow-cf">
            <TypeAnimation
            className="whitespace-pre-line inline-block w-150"
                sequence={[
                    `def message_tree(t, x, m):\n....yield t.label\n....for b in t.branches:\n........if b.label in message:\n............yield b.label
                    \n........yield from message_tree(b, x, m)\n\n>>> to recap: my name is althea rosales. hmm... you probs know that already. but to recap: \n
                    i'm a cs major at berkeley, a burnt out academic victim, 
                    and someone who takes linkedin very unseriously. 
                    \ni have perfect pitch, i'm classically trained, and i'm super cool, sexy, smart, and funny.\n
                    oh, and i'm going on a second date with a super cool and sexy ui/ux design major at CSUEB.\n
                    pretty cool, right?`, 1000, 
                    `def message_tree(t, x, m):\n....yield t.label\n....for b in t.branches:\n........if b.label in message:\n............yield b.label
                    \n........yield from message_tree(b, x, m)\n\n>>> or maybe i'm a white MAGA 50-year-old catfishing as althea. /hj`, 2000
                ]}
                speed={80}
                deletionSpeed={99}
                repeat={Infinity}
            
            />
            <br></br>
            <br></br>
            <br></br>
            <Link to="/TheWhy">
            <TypeAnimation
            sequence={["okay, tell me more <3"]}
            className="hover:underline"/>
            </Link>
        </div>
    </div>
  )
}

export default MoreOfMe