import React from 'react';

const Contact = () => {
  return (<>
    <div className='my-12 flex flex-col mx-6 lg:mx-40 items-center justify-around'>
    <input type="text" placeholder='Name' className='focus:outline-0 my-2 w-full bg-[#2222225f] rounded md:w-[80%] lg:w-[60%] focus:bg-gray-700 border border-gray-700 p-1'/>
    <input type="email" placeholder='Email' className='focus:outline-0 my-2 w-full bg-[#2222225f] rounded md:w-[80%] lg:w-[60%] focus:bg-gray-700 border border-gray-700 p-1'/>
    <textarea name="" id="" placeholder='Write Your Message...' className='focus:outline-0 my-2 w-full bg-[#2222225f] rounded md:w-[80%] lg:w-[60%] h-48 focus:bg-gray-700 border border-gray-700 p-1'></textarea>
    </div>
  </>)
}

export default Contact