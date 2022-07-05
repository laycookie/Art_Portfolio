import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navbar from '../../components/Navbar'
import Login from '../../components/Login'

const IndexPage = () => {
  let TitleSeconderyText = document.getElementById('TitleSeconderyText')
  let TitleText = document.getElementById('TitleText')

  
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
        <div>
          <h1 className='text-red-500 h1Font customIntroText '>Art Portfolio</h1>
          <h3 className='text-red-500 flex justify-center' id='TitleSecondaryText'>By Dennis Lonoshchuk</h3>
        </div>
      </div>
      
    </>
  )
}

export default IndexPage
