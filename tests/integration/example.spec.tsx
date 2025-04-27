import Home from '@/app/page'
import { describe } from '@jest/globals'
import { render, screen } from '@testing-library/react'

describe('Landing', () => {
  it('should render the page', () => {
    render(<Home />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
