import React from 'react'
import { useContext } from 'react'
import { contactContext } from './ContactPage'


const ContactDetails = () => {
   const{contactData} =useContext(contactContext)

    
return (
    <div className='text-white font-bold text-2xl bg-indigo-400'>

      <h1 className='text-white font-bold text-2xl'>contact information</h1>
      <p>Name:{contactData.name}</p>
      <p>Email:{contactData.email}</p>
    </div>
  )
}

export default ContactDetails
