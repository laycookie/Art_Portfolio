/* eslint-disable react/no-unescaped-entities */
/* Without first line gives some invalide errors */
import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import Login from '../../components/Login'
import Navbar from '../../components/Navbar'
import Section from '../../components/Section'
import Threed_model from '../../components/Threed_model'

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
  const [arrowOffSet, setArrowOffSet] = useState(0)
  const [arrowLength, setArrowLength] = useState(0)

  function onHoverSetArrowLength() {
    setArrowOffSet(48)
    setArrowLength(94)
  }
  function offHoverSetArrowLength() {
    setArrowOffSet(0)
    setArrowLength(0)
  }
  //End of button animation

  return (
    <>
      <MetaTags title="Home" description="Index page" />

      <header className="absolute w-full">
        <Login />
        <nav>
          <Navbar
            names={['Home', 'Contact']}
            links={['/', '/contact']}
            offSetBottomElement={128}
          />
        </nav>
      </header>

      {/* This div is here in order to shift button and Title to the center of the page. */}
      <section className="reletive" style={{ height: '100vh' }}>
        <div
          className="absolute right-0 left-0 bottom-0"
          // You subtract (Hight of the Title + Hight of the button) / 2 from the 50vh to account for the height of the Title and button.
          style={{ top: 'calc(50vh - (144px + 59px)/2)' }}
        >
          {/* Title of the page */}
          <div className="flex justify-center">
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
              <cite
                className="text-red-500 flex justify-center pt-2 transition-all font-bold text-xl not-italic"
                id="TitleSecondaryText"
                style={{ opacity: mainTitleDisplay }}
              >
                By Dennis Lonoshchuk
              </cite>
            </div>
          </div>
          {/* End of title of the page */}

          {/* button */}
          <div className="flex justify-center mt-24 transition-all">
            <button
              className="transition-all"
              style={{
                transform: `translate(0, -${arrowOffSet}px)`,
              }}
              onMouseEnter={onHoverSetArrowLength}
              onMouseLeave={offHoverSetArrowLength}
            >
              <svg
                width="90"
                viewBox="0 0 8 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative translate-y-12 transition-all"
                style={{
                  height: `${arrowLength}px`,
                  width: 'full',
                }}
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
        </div>

        <div
          className="absolute right-0 left-0 bottom-0"
          style={{ top: 'calc(100vh - 0.5rem)' }}
        >
          {/* If you want to change the hight of this line keep in mind that you would need to change by how much you are subttracting from 100vh from the parrent element position (ex: <hr hight=0.5rem> than in parrent style={{top: calc(100vh - 0.5rem) }}*/}
          <hr className="bg-red-500 h-2" />
        </div>
      </section>

      <main>
        {/* Second Section of the page (Cerial pakageing)*/}
        <Section bgColor="bg-green-400" textColor="text-blue-500">
          <h2
            className="h1Font flex justify-center relative
        pt-20 pb-48 z-10"
          >
            Cerial pakageing
          </h2>
          <div className="flex justify-center items-center relative pb-36 xl:flex-row flex-col z-10">
            <p
              className="text-2xl font-bold
              xl:w-[36rem] xl:mr-24 xl:ml-12 xl:mb-0
              mb-24 mx-24"
            >
              The following packaging is of a blueberry cereals made by “Generic
              C” company. There are made for people who want more healthy
              cereals that have similar taste to regular cereals.
            </p>
            <a href="/CerialPakageing" draggable="false">
              <img
                src="images/pakageCerial.svg"
                alt="Cereals box"
                draggable="false"
                className="transition-all sm:w-[32rem] xl:ml-0 xl:mr-12
                  w-[26rem]"
                id="shadowBoxForImage"
              />
            </a>
          </div>

          <div className="flex justify-center relative z-10">
            <Threed_model></Threed_model>
          </div>
          <div className="w-full relative z-0">
            <svg
              className="absolute right-0 bottom-0 z-0"
              width="574"
              height="1885"
              viewBox="0 0 574 1885"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M165 1885H85H0C0 1839.44 36.9365 1802.5 82.5 1802.5C128.063 1802.5 165 1839.44 165 1885Z"
                fill="white"
                fillOpacity="0.45"
              />
              <circle
                cx="381.5"
                cy="1718.5"
                r="82.5"
                fill="white"
                fillOpacity="0.45"
              />
              <circle
                cx="277.5"
                cy="1777.5"
                r="82.5"
                fill="white"
                fillOpacity="0.45"
              />
              <path
                d="M299 1806.5C299 1839.55 279.565 1868.06 251.5 1881.23L213 1868.5L178.5 1879.75C152.059 1866 134 1838.36 134 1806.5C134 1760.94 170.937 1724 216.5 1724C262.063 1724 299 1760.94 299 1806.5Z"
                fill="white"
                fillOpacity="0.45"
              />
              <path
                d="M248 1818.5C248 1848.31 240.691 1868 217 1882.5C217 1882.5 182.755 1882.5 167 1882.5C147.258 1882.5 113.436 1882.5 113.436 1882.5C94.8628 1867.37 83 1844.32 83 1818.5C83 1772.94 119.937 1736 165.5 1736C211.063 1736 248 1772.94 248 1818.5Z"
                fill="white"
                fillOpacity="0.45"
              />
              <circle
                cx="201.5"
                cy="1695.5"
                r="82.5"
                fill="white"
                fillOpacity="0.45"
              />
              <circle
                cx="328.5"
                cy="1718.5"
                r="82.5"
                fill="white"
                fillOpacity="0.45"
              />
              <path
                d="M393.165 167.177C393.165 74.0786 481.011 0 584.829 0C688.647 0 595.81 1885 595.81 1885H101.5C134.939 1798.46 287.598 1769.52 393.165 1750.86V167.177Z"
                fill="white"
              />
              <path
                d="M448 139L448 1710"
                stroke="#C8C8C8"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M493 139V1678"
                stroke="#C8C8C8"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </Section>
        {/* End of Second Section of the page */}
        <hr className="bg-red-500 h-2" />
        {/* Third Section of the page (Stress amoung teenagers)*/}
        <Section bgColor="bg-red-200" textColor="text-gray-500">
          <div>
            <h2
              className="text-blue-400 h1Font flex justify-center
          pt-28 pb-52"
            >
              Stress amoung teenagers
            </h2>
            <p className="font-bold mx-48 text-2xl">
              Stress among teenagers is a minimalistic booklet which was
              designed to give basic information about problem of teenagers.
              Colors were carefully chosen to show the seriousness of the
              problem and at the same time make readers relax, which is the
              opposite of stress and what teenagers should feel like.
            </p>
          </div>
        </Section>
        {/* End of Third Section of the page */}
        <hr className="bg-red-500 h-2" />
        {/* Fourth Section of the page (Carrer Path)*/}
        <Section bgColor="bg-blue-900" textColor="text-white">
          <h2
            className="flex justify-center
          text-7xl font-bold
          pt-32 pb-48"
          >
            Carrer Path
          </h2>
          <p className="text-2xl">
            This project talks about Pros and Cons of being a web developer.
            This is pretty close to me because this is a career path that I'm
            choosing.
          </p>
        </Section>
        {/* End of Fourth Section of the page */}
        <hr className="bg-red-500 h-2" />
        {/* Fifth Section of the page (Emulate a Designer)*/}
        <Section
          bgColor="bg-black"
          textColor="text-white
        "
        >
          <h2
            className="text-7xl flex justify-center font-bold
          pt-24 pb-44"
          >
            Emulate a Designer
          </h2>
          <div
            className="flex justify-center
          pb-32"
          >
            <a href="#">
              <img
                src="images/EmulateaDesignerDesign.png"
                alt="Emulate a Designer Design"
                className="rounded-lg
            w-[64rem]"
              />
            </a>
          </div>
          <div className="flex justify-center">
            <p
              className="text-2xl
           w-[86rem]"
            >
              The following project is emulation of the logo designer Paul Rand,
              an artist responsible for creating logos for the legenderie
              companies like, abc, IBM, and Apple.
            </p>
          </div>
        </Section>
        {/* End of Fifth Section of the page */}
      </main>
    </>
  )
}

export default IndexPage
