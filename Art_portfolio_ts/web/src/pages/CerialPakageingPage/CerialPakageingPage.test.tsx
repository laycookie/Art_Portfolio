import { render } from '@redwoodjs/testing/web'

import CerialPakageingPage from './CerialPakageingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CerialPakageingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CerialPakageingPage />)
    }).not.toThrow()
  })
})
