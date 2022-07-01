import { routes } from '@redwoodjs/router';
import React from 'react'

interface MessageProps {
    names: string[];
    links: string[];
}

//This one is good for up to 3 links.
export default function Navbar({ names, links }) {
    if (names.length > 3)
    {
        throw new Error("Too many names")
    }
    else if (names.length != links.length)
    {
        throw new Error("Names and links must be the same length")
    }

    return (
        <ul>
            {names.map((name: string, index: number) => {
                let shiftVal: number = 96;
                let classNameLink: string = `text-red-500 bg-red-500 hover:text-white
                flex justify-around box-border w-96 
                relative left-[${index * shiftVal}px] py-4 mb-[${shiftVal * ((index / (index + 5e-324)) + 1)}px]
                transition-all
                `
                return (
                    <a href = {links[index]} key={index} className={classNameLink} >{name}</a>
                )
            })}
        </ul>
    )
}
