import { Link, routes } from '@redwoodjs/router'
import {useRef, useEffect, useState} from 'react';
import { MetaTags } from '@redwoodjs/web'
import Navbar from '../../components/Navbar'
import Login from '../../components/Login'

const IndexPage = () => {
  const [mainTitleDisplay, setmainTitleDisplay] = useState("50")
  const [mainTitleBorder, setmainTitleBorder] = useState(100)
  console.log(mainTitleDisplay)

  function showHeader() {
    setmainTitleBorder(100)
    setmainTitleDisplay("1")
  }
  function hideHeader() {
    setmainTitleBorder(0)
    setmainTitleDisplay("0")
  }//style={{borderWidth: "0 0 8px"}}
  
  return (
    <>
      <MetaTags title="Home" description="Index page" />

      <header>
        <Login />
        <nav>
          <Navbar 
          names = {["Home", "Contact"]}
          links = {["/", "/contact"]} 
          offSetBottomElement = {128}/>
        </nav>
      </header>
      <div className="transition-all flex justify-center" id='TitleText'>
        <div onMouseEnter={showHeader} onMouseLeave={hideHeader}> 
          <h1 className='text-red-500 h1Font pb-1' >Art Portfolio</h1>
          <div className='bg-red-500 flex justify-center transition-all' style={{height: "8px", width:`${mainTitleBorder}%`, margin:"auto"}}></div>
          <h3 className='text-red-500 flex justify-center pt-2 transition-all' id='TitleSecondaryText' style={{opacity: mainTitleDisplay}}>By Dennis Lonoshchuk</h3>
        </div>
      </div>
      
      <div>
        <button>
          <svg></svg>
          <svg></svg>
        </button>
      </div>
    </>
  )
}

export default IndexPage
