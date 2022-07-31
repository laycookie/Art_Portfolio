import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EmulateaDesignerPage = () => {
  return (
    <>
      <MetaTags title="EmulateaDesigner" description="EmulateaDesigner page" />

      <h1>EmulateaDesignerPage</h1>
      <p>
        Find me in <code>./web/src/pages/EmulateaDesignerPage/EmulateaDesignerPage.tsx</code>
      </p>
      <p>
        My default route is named <code>emulateaDesigner</code>, link to me with `
        <Link to={routes.emulateaDesigner()}>EmulateaDesigner</Link>`
      </p>
    </>
  )
}

export default EmulateaDesignerPage
