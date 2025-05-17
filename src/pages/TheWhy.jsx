import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';


const TheWhy = () => {
  return (
    <div className="bg-black h-full min-h-screen flex">
        <div className="p-10 text-royalpurp text-lg font-dot text-shadow-glow-royal">
            <TypeAnimation
                className="whitespace-pre-line inline-block w-150"
                    sequence={[
                        `class TheWhy:\n....def __init__(self, msg):\n........self.msg = msg\n\n
                        ....def gift_to_date(msg):\n........rev = list(reversed(msg))\n........while rev:\n............print(rev.pop())
                        \n\n>>> now... i know you're BIG on design. who knew one of the things you'd be thinking about the most while we were playing
                        the sims was the UI? i admire you for that.\n\nso in lieu of hydrangeas and cornflowers (your favourite flowers), i decided to
                        make this website to both apply my coding skills to the real world, and because you've motivated me to find creative ways
                        to grow as a programmer, web developer, and builder... beyond just grinding leetcode!`, 2000, 
                        `class TheWhy:\n....def __init__(self, msg):\n........self.msg = msg\n\n
                        ....def gift_to_date(msg):\n........rev = list(reversed(msg))\n........while rev:\n............print(rev.pop())
                        \n\n>>> i also want to gift you an assortment of ferrero rocher chocolates. a few days back, you told me that you were
                        on your period. obviously, i don't have a uterus, so i don't claim to understand how periods feel like. but i've heard
                        somewhere that chocolates work wonders, especially for period cramps.\n\n
                        also, i admire how communicative you are with me! excuse me for being cheesy, but i feel that you've inspired me
                        to become my best self just by doing what you are doing now, be it going to the gym and rewarding yourself accordingly,
                        staying on top of your commitments while giving yourself permission to rest, etc! you deserve to have your favourite snack <3`, 2000,
                        `class TheWhy:\n....def __init__(self, msg):\n........self.msg = msg\n\n
                        ....def gift_to_date(msg):\n........rev = list(reversed(msg))\n........while rev:\n............print(rev.pop())
                        \n\n>>> i'm so happy you're here today. and even though we have so much to learn about each other, in the short time that we've
                        gotten to know each other, there's a lot of things that i admire about you. as much as you're really pretty, i wanna take
                        the time to focus on WHO YOU ARE rather than WHAT YOU LOOK LIKE. your aura is beautiful and your presence, whether with me
                        or with your friend group, lights up the room every time. thank you for existing.\n\nlet's have fun today, take great pics, laugh together,
                        and maybe learn a thing or two about human-centred design. <3\nwhat do you say, lauren?`, 2000
                    ]}
                    speed={80}
                    deletionSpeed={89}
                
                />
                <br></br>
                <br></br>
                <br></br>
            <Link to="/Outro">
            <TypeAnimation
            sequence={["let's roll."]}
            className="hover:underline"/>
            </Link>
        </div>
    </div>
  )
}

export default TheWhy