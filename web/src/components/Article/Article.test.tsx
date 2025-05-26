import { render } from '@redwoodjs/testing/web'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Article article={{body: "", createdAt: 0, id: 100, title: "Oi"}} />)
    }).not.toThrow()
  })
})
