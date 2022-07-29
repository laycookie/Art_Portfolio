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
        <section className="bg-green-400 text-blue-500">
          <article>
            <h2
              className="h1Font flex justify-center
        pt-20 pb-48"
            >
              Cerial pakageing
            </h2>
            <div className="flex justify-center items-center pb-56 xl:flex-row flex-col">
              <p
                className="text-2xl font-bold
              xl:w-[36rem] xl:mr-24 xl:ml-12 xl:mb-0
              mb-24 mx-24"
              >
                The following packaging is of a blueberry cereals made by
                “Generic C” company. There are made for people who want more
                healthy cereals that have similar taste to regular cereals.
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

            <div className="flex justify-center">
              <canvas>For 3D moddle</canvas>
            </div>
          </article>
          {/* Makes sure that the page takes up the full height of the screen */}
          <div />
        </section>
        {/* End of Second Section of the page */}
        <hr className="bg-red-500 h-2" />
        {/* Third Section of the page (Stress amoung teenagers)*/}
        <section className="bg-red-200 text-gray-500">
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
        </section>
        {/* End of Third Section of the page */}
        <hr className="bg-red-500 h-2" />
        {/* Fourth Section of the page (Carrer Path)*/}
        <section className="bg-blue-900 text-white">
          <h2
            className="text-7xl flex justify-center font-bold
          pt-32 pb-48"
          >
            Carrer Path
          </h2>
          <p className="text-2xl">
            This project talks about Pros and Cons of being a web developer.
            This is pretty close to me because this is a career path that I'm
            choosing.
          </p>
        </section>
        {/* End of Fourth Section of the page */}
        <hr className="bg-red-500 h-2" />
        {/* Fifth Section of the page (Emulate a Designer)*/}
        <section className="bg-black text-white">
          <h2
            className="text-7xl flex justify-center font-bold
          pt-32 pb-48"
          >
            Emulate a Designer
          </h2>
          <p className="text-2xl">
            The following project is emulation of the logo designer Paul Rand,
            an artist responsible for creating logos for the legenderie
            companies like, abc, IBM, and Apple.
          </p>
        </section>
        {/* End of Fifth Section of the page */}
      </main>
    </>
  )
}

export default IndexPage
