import React, { useState } from 'react'

function ModifyCount(props){

const handleInput=(event)=>{

props.changeCount(event.target.value)
setcount(value)

}

  return(
    <>
    <h1>Components </h1>
    <input type='text' onChange={handleInput}/>
    <button onClick={props.increaseCount}className='py-2 px-4 rounded-lg text-white bg-orange-400 '>Increase Count</button>
    </>
  )
}



const ServicePage = () => {
  const[count,setcount]=useState(0)
  const increaseCount=()=>{
    setcount(count+1)
  }
  const changeCount=(value)=>{
    setcount(value)
  }
  return (
    <div>
      <h1 className='fond boldtext-5xl text center'> This is my service page </h1>
      <button onClick={increaseCount} className='py-2 px-4 rounded-lg text-white bg-orange-400 '>Increase from Count</button>
      <div className='p-5 m-5 rounded-xl bg-indigo-400 text white text-5xl text-center'> 
      {count}
      </div>
      <ModifyCount increaseCount={increaseCount} changeCount={changeCount} />
      <ModifyCount increaseCount={increaseCount} changeCount={changeCount} />

    </div>
  )


}
export default ServicePage

// src/ServicePage.js
// import React from 'react';

// const services = [
//   {
//     id: 1,
//     title: 'Web Development',
//     description: 'Creating responsive and dynamic websites tailored to your needs.',
//   },
//   {
//     id: 2,
//     title: 'Mobile App Development',
//     description: 'Building intuitive and efficient mobile applications for iOS and Android.',
//   },
//   {
//     id: 3,
//     title: 'SEO Optimization',
//     description: 'Improving your website’s visibility on search engines to drive more traffic.',
//   },
// ];

// const ServicePage = () => {
//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Our Services</h1>
//       <div className="flex flex-col gap-8">
//         {services.map(service => (
//           <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold text-gray-700 mb-2">{service.title}</h2>
//             <p className="text-gray-600">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicePage;

