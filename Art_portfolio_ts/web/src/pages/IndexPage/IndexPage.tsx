import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navbar from '../../components/Navbar'

const IndexPage = () => {
  return (
    <>
      <MetaTags title="Home" description="Index page" />

      <header>
        <nav>
          <Navbar 
          names = {["Home", "Contact"]}
          links = {["/", "/contact"]} 
          offSetBottomElement = {32}/>
        </nav>
      </header>
      <h1 className='text-red-500'>Art Portfolio</h1>
    </>
  )
}

export default IndexPage
