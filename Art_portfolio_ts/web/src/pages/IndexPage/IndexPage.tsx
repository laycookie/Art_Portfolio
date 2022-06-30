import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const IndexPage = () => {
  return (
    <>
      <MetaTags title="Home" description="Index page" />

      <h1 className='text-sky-400'>IndexPage</h1>
    </>
  )
}

export default IndexPage
