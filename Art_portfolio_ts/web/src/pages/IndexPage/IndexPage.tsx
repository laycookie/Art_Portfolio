import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navbar from '../../components/Navbar'
import Login from '../../components/Login'

const IndexPage = () => {
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
      <h1 className='text-red-500'>Art Portfolio</h1>
    </>
  )
}

export default IndexPage
