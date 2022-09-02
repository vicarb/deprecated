import { render } from '@testing-library/react'
import { Swipe } from '../swiper'
/**
 * @jest-environment jsdom
 */
// the above comment helps

  describe('Swipe', () => {
    it('renders Swipe without crashing', () => {
  
  
      render(<Swipe/>)
    })
  })
  