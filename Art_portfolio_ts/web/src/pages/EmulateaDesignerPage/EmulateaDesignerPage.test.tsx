import { render } from '@redwoodjs/testing/web'

import EmulateaDesignerPage from './EmulateaDesignerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EmulateaDesignerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmulateaDesignerPage />)
    }).not.toThrow()
  })
})
