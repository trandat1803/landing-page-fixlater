import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
      <h1 className='primary-heading'>Have any questions?</h1>
      <h1 className='primary-heading'>Contact us</h1>
      <div className='contact-form-container'>
        <input type='text' placeholder='your@gmail.com'/>
        <button className='secondary-button'>Submit</button>
      </div>
    </div>
  )
}

export default Contact
