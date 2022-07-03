import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navbar from '../../components/Navbar'
import Login from '../../components/Login'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Index page" />
      <header>
      <Login />
        <nav>
          <Navbar 
          names = {["Home", "Contact"]}
          links = {["/", "/contact"]} 
          offSetBottomElement = {128}/>
        </nav>
      </header>
      <h1 className='text-red-500 flex justify-center'>Contact</h1>
      <form action="/Contact" method="post"
      className='flex justify-center flex-col mx-48'>
        <div className='space-x-4 flex justify-center mt-8 mb-4'>
          <input type="text" name="firstName" id='firstName' placeholder="First Name"
          className='drop-shadow h-8 w-full rounded-lg' style={{padding: "0 10px"}}/>
          <input type="text" name="lasttName" id='lasttName' placeholder='Last Name'
          className='drop-shadow h-8 w-full rounded-lg' style={{padding: "0 10px"}}/>
        </div>
        <div className=''>
          <input type="text" name="email" id='email' placeholder='Email'
            className='drop-shadow h-8 w-full mb-4 rounded-lg' style={{padding: "0 10px"}}/>
          <input type="text" name="subject" id='subject' placeholder='Subject'
            className='drop-shadow h-8 w-full mb-4 rounded-lg' style={{padding: "0 10px"}}/>
          <textarea name="contant" id='contant' placeholder='Contant'
            className='drop-shadow h-32 w-full mb-4 rounded-lg' style={{padding: "6px 10px"}}/>
        </div>
      </form>
    </>
  )
}

export default ContactPage
