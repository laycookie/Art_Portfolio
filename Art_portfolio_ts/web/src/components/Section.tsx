/* This component just makes it so the section will take up 100% of viewport space in case it dosent */
import { useState, useEffect, useRef } from 'react'

interface MessageProps {
  bgColor: string
  textColor: string
  children: React.ReactNode
}

{
  /* bgColor and textColor is the background/text color of the section/text which should be set with Tailwind example of bgColor: "bg-red-500"*/
}
export default function Section(props: MessageProps) {
  const elementRef = useRef(null)
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [elementHeight, setElementHeight] = useState(null)

  function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }

  useEffect(() => {
    //Handles on load of the page
    setElementHeight(elementRef.current?.clientHeight)
    console.log(elementRef.current?.clientHeight)
    //Handles resizing of the window
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize', handleWindowResize)
  }, [])

  //===Set hight of the section to 100% of the viewport===
  useEffect(() => {}, [])
  //=====================================================
  return (
    <>
      <section
        className={props.bgColor + ' ' + props.textColor}
        //style={{ height: elementHeight + 'px' }}
        ref={elementRef}
      >
        <article>{props.children}</article>
        <div />
      </section>
    </>
  )
}
