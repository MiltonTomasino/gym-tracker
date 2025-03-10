import React from 'react'
import '../styles/Contact.css'
import { useState } from 'react'
import TermsofService from './TermsofService';

function FAQ() {

    const [dropFAQ, setDropFAQ] = useState(false);
    const [dropTS, setDropTS] = useState(false)

    const toggleDropFAQ = () => {
        setDropFAQ(!dropFAQ);
    }

    const toggleDropTS = () => {
      setDropTS(!dropTS);
  }

  return (
    <>
            {/* Toggle function on click that shows the contents of FAQ. The same toggle also affects which icon displays next to FAQ */}
              <div className='drop-down'>
                <h1 onClick={toggleDropFAQ} className='dropdown-title'>{dropFAQ ? (<>&#8722;</>) : (<>&#43;</>)} FAQ</h1>
                {dropFAQ ? (
                    <p>
                        <b>Q. When does the gym open and close?</b><br /><br />
                        A. The gym is open between 10:00AM - 10:00PM<br /><br />

                        <b>Q. What kind of machines do you provide?</b><br /><br />
                        A. For now, the machines we provide are cycling machines and weight lifting lik bench pressing. This will soon be expanded.<br /><br />

                        <b>Q. My question is still not answered, where can I contact you?</b><br /><br />
                        A. Fill out the form at the bottom of this page and send us direct feedback.<br /><br />
                    </p>

                ) : (null)}
                
            </div>

            <div className='drop-down'>
              <h1 className='dropdown-title' onClick={toggleDropTS}>{dropTS ? (<>&#8722;</>) : (<>&#43;</>)} Terms of Services</h1>
              {dropTS ? (<TermsofService />) : (null)}
            </div>

            <form className='feedback'>
                <h1>Leaver your feedback/questions below</h1>
                <input type='text' placeholder='Username' /><br/><br/>
                <textarea /><br/>
                <button type='submit' className='submit-button'>Submit</button>
            </form>
    </>
  )
}

export default FAQ