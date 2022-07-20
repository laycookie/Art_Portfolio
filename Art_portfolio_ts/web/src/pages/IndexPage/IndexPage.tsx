import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import Login from '../../components/Login'
import Navbar from '../../components/Navbar'

const IndexPage = () => {
  //Title of the page
  const [mainTitleDisplay, setmainTitleDisplay] = useState('0')
  const [mainTitleBorder, setmainTitleBorder] = useState(0)

  function showHeader() {
    setmainTitleBorder(100)
    setmainTitleDisplay('1')
  }
  function hideHeader() {
    setmainTitleBorder(0)
    setmainTitleDisplay('0')
  }
  //End of title of the page

  //Button animation
  const [arrowOffSet, setArrowOffSet] = useState(48)
  const [arrowLength, setArrowLength] = useState(94)

  function onHoverSetArrowLength() {
    console.log('Enter')
    setArrowOffSet(48)
    setArrowLength(94)
  }
  function offHoverSetArrowLength() {
    setArrowOffSet(0)
    setArrowLength(0)
    console.log('Leave')
  }
  //End of button animation

  return (
    <>
      <MetaTags title="Home" description="Index page" />

      <header>
        <Login />
        <nav>
          <Navbar
            names={['Home', 'Contact']}
            links={['/', '/contact']}
            offSetBottomElement={128}
          />
        </nav>
      </header>
      <div className="transition-all flex justify-center" id="TitleText">
        <div onMouseEnter={showHeader} onMouseLeave={hideHeader}>
          <h1 className="text-red-500 h1Font pb-1">Art Portfolio</h1>
          <div
            className="bg-red-500 flex justify-center transition-all rounded-full"
            style={{
              height: '8px',
              width: `${mainTitleBorder}%`,
              margin: 'auto',
            }}
          ></div>
          <h3
            className="text-red-500 flex justify-center pt-2 transition-all font-bold text-xl"
            id="TitleSecondaryText"
            style={{ opacity: mainTitleDisplay }}
          >
            By Dennis Lonoshchuk
          </h3>
        </div>
      </div>

      {/* button */}
      <div className="flex justify-center mt-24 transition-all">
        <button
          className="transition-all"
          style={{ transform: `translate(0, -${arrowOffSet}px)` }}
        >
          <svg
            width="full"
            viewBox="0 0 8 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative translate-y-12 transition-all"
            style={{
              height: `${arrowLength}px`,
            }}
            onMouseEnter={onHoverSetArrowLength}
            onMouseLeave={offHoverSetArrowLength}
          >
            <path
              d="M4 90V4"
              stroke="#ef4444"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>

          <svg
            width="90"
            height="59"
            viewBox="0 0 107 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex justify-center"
            onMouseEnter={onHoverSetArrowLength}
            onMouseLeave={offHoverSetArrowLength}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.83438 1.80174C3.60073 0.0534198 6.44993 0.0680311 8.19826 1.83438L53.5 47.6031L98.8017 1.83438C100.55 0.0680311 103.399 0.0534198 105.166 1.80174C106.932 3.55007 106.947 6.39927 105.198 8.16562L57.409 56.4476C55.2566 58.6221 51.7434 58.6221 49.591 56.4476L1.80174 8.16562C0.0534198 6.39927 0.0680311 3.55007 1.83438 1.80174Z"
              fill="#ef4444"
            />
          </svg>
        </button>
      </div>
      {/* button end */}
    </>
  )
}

export default IndexPage
