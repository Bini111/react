import React, { createContext, useState } from 'react'
import ContactDetails from './ContactDetails'
import { useContext } from 'react'
//name export 
  export const contactContext=createContext(null)
function ContactPage(){

const [contactData,setcontactData]=useState({

name:'Prajwal Pokhrel',
email:'prajwal@gmail.com',
phone:['+98887384787',+'39849387367'],
address:'illam,nepal'


})
  return (
    <contactContext.Provider value={{contactData}}>
    
      <h1>This is Contact Page </h1>
      <ContactDetails/>
    </contactContext.Provider>
   
  )
}

export default ContactPage











// src/ContactPage.js
// import React, { useState } from 'react';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
