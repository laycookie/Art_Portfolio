import { routes } from '@redwoodjs/router';
import React from 'react'

interface MessageProps {
    names: string[];
    links: string[];
}

//This one is good for up to 3 links.
export default function Navbar({ names, links, offSetBottomElement }) {
    if (names.length > 3)
    {
        throw new Error("Too many names")
    }
    else if (names.length != links.length)
    {
        throw new Error("Names and links must be the same length")
    }

    return (
        <ul className={`mb-${offSetBottomElement}`}>
            {names.map((name: string, index: number) => {
                let spacing: number = 16;;
                let spacingOffSet = 4;
                let shiftNavBar: number = 420;
                return (
                    <li>
                        <a href = {links[index]} key={index} 
                        className='text-red-500 bg-red-500 hover:text-white
                        flex justify-around box-border relative py-3 -rotate-45
                        transition-all'
                        style={{
                            width: `900px`,
                            left: `${(index * (spacing * spacingOffSet)) - shiftNavBar}px`,
                            marginBottom: `${spacing}px`,
                        }}
                        >{name}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
