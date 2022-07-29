import React from 'react'

interface MessageProps {
  names: string[]
  links: string[]
  offSetBottomElement: number
}

//This one is good for up to 3 links.
export default function Navbar({
  names,
  links,
  offSetBottomElement,
}: MessageProps) {
  if (names.length > 3) {
    throw new Error('Too many names')
  } else if (names.length != links.length) {
    throw new Error('Names and links must be the same length')
  }

  return (
    <ul
      style={{
        margin: `0 0 ${offSetBottomElement}px`,
      }}
    >
      {names.map((name: string, index: number) => {
        const spacing = 16
        const spacingOffSet = 4
        const shiftNavBar = 428
        return (
          <li key={index}>
            <a
              href={links[index]}
              className="text-red-500 bg-red-500 hover:text-white
                        flex justify-around box-border relative py-3 -rotate-45
                        transition-all"
              style={{
                width: `900px`,
                left: `${index * (spacing * spacingOffSet) - shiftNavBar}px`,
                marginBottom: `${spacing}px`,
              }}
            >
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
