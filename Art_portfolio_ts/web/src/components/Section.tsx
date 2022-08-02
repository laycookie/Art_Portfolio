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
  const [initialElementHeight, setInitialElementHeight] = useState(null)
  const [elementHeight, setElementHeight] = useState(null)

  //Set hight of the section to 100% of the viewport
  function resizeElement() {
    if (initialElementHeight == null) return

    if (windowSize.innerHeight > initialElementHeight) {
      console.log('resizing', initialElementHeight, windowSize.innerHeight)
      elementRef.current.style.height = `100vh`
    } else {
      console.log('not resize', initialElementHeight, windowSize.innerHeight)
      elementRef.current.style.height = `auto`
    }
  }

  function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }

  useEffect(() => {
    //Saves elements highet on load
    setInitialElementHeight(elementRef.current?.clientHeight)
    setElementHeight(elementRef.current?.clientHeight)
  }, [])

  //verifyes element height (Honestly the ressoning behind this is extreamly curesdly it has to do with onLoad not working if there are no imagies)
  function verifyElementHeight() {
    elementRef.current.style.height = `${elementRef.current?.clientHeight}px`
    setInitialElementHeight(elementRef.current?.clientHeight)
    setElementHeight(elementRef.current?.clientHeight)

    resizeElement()

    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize', handleWindowResize)
  }

  useEffect(() => {
    //makes sure that the code dosent run only when the varible is assigned a proper value
    if (initialElementHeight == null) return

    //preapears the data to be send to the recursive function
    let children
    if (Array.isArray(props.children) == false) {
      children = [props.children]
    } else {
      children = props.children
    }

    //recursive function that verefies that the element height is correct
    function findImgInChildren(element) {
      for (const i in element) {
        //check if img
        if (element[i].type == 'img') {
          return true
        }

        let newChiled
        if (element[i].props?.children == undefined) {
          return false
        } else {
          newChiled = element[i].props.children
        }
        if (!Array.isArray(newChiled)) {
          newChiled = [newChiled]
        }

        if (findImgInChildren(newChiled)) {
          return true
        }
      }
      return false
    }

    //if findImgInChildren() returns true then the code will wait until the image will be Loadded and then it will asign the highet
    if (findImgInChildren(children)) return
    elementRef.current.style.height = `100vh`

    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize', handleWindowResize)
  }, [initialElementHeight])

  //makes sure that it resizes the element everytime the window is resized
  useEffect(() => {
    resizeElement()
  }, [windowSize])
  return (
    <section
      className={props.bgColor + ' ' + props.textColor}
      ref={elementRef}
      onLoad={verifyElementHeight}
    >
      <article>{props.children}</article>
    </section>
  )
}
