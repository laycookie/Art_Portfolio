// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/emulatea-designer" page={EmulateaDesignerPage} name="emulateaDesigner" />
      <Route path="/CerialPakageing" page={CerialPakageingPage} name="cerialPakageing" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/" page={IndexPage} name="index" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
