import {Button} from '../button'
import { render } from '@testing-library/react'
/**
 * @jest-environment jsdom
 */
// the above comment helps



  describe('button', () => {
    it('renders button without crashing', () => {
  
  
      render(<Button/>)
    })
  })
  