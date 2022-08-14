import React, { useEffect } from 'react'

export default function GridBg() {
    const columns = 9
    const rows = 4

    const div = React.createElement('div')
    const img = React.createElement('div', {class:"flex, justify-center, items-center"}, 
    React.createElement('img', {src:"images/gridBgElement.svg", alt:"gridBgElement", draggable:"false" })
    )


        let columnOfElements = []

        for (let i = 0 ; i < columns; i++) {
            if (columns % 2 === 0) {
                throw "You had an even number of columns, this is not supported"
            } else {
                if (i % 2 === 0) {
                    console.log("div")
                    columnOfElements.push(div)
                }
                else {
                    console.log("img")
                    columnOfElements.push(img)
                }
            }
        }

        const allElements = []
        for (let i = 0; i < rows; i++) {
            //unpaking the array and pushing values to new array
            for (let i = 0; i < columnOfElements.length; i++) {
                allElements.push(columnOfElements[i])
            }
        }
        console.log(allElements)

  return (
    <div className={'grid h-full'}
    style={{gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gridTemplateRows:`repeat(${rows}, minmax(0, 1fr))`}}>
        {/* loop over allElements */}
        {allElements.map((element, index) => {
            return (
                <div key={index} className="grid-item">
                    {element}
                </div>
            )
        })}
    </div>
  )
}
