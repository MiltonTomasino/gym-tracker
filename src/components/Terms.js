import React from 'react'
import Terms from "../assets/termsInfo.png"
import { Link } from 'react-router-dom'

function TermsComp() {
  return (
    <div className='checkboxes'>
        <div>
            <input type='checkbox' required name='terms' />
                <small>I agree with the Terms of Services
                    <div className='termsImage'>
                        <img src={Terms} />
                            <span className='tooltip'>Visit <Link to='/contact'>Contact page</Link> to view terms of servics</span>
                    </div>
                </small>
        </div>
    </div>
  )
}

export default TermsComp