import React, { useState } from 'react';

const Contact = () => {
  const initialMsg = {
    name:"",
    email:"",
    message:""
  }
  const [fullmsg,setFullmsg] = useState(initialMsg);
  return (<>
    <div className='my-12 flex flex-col mx-6 lg:mx-40 items-center justify-around'>
    <input type="text" value={fullmsg.name} onChange={(e)=>{setFullmsg({...fullmsg,name:e.target.value})}} placeholder='Name' className='focus:outline-0 my-2 w-full bg-[#2222225f] rounded md:w-[80%] lg:w-[60%] focus:bg-gray-700 border border-gray-700 p-1'/>
    <input type="email" value={fullmsg.email} onChange={(e)=>{setFullmsg({...fullmsg,email:e.target.value})}} placeholder='Email' className='focus:outline-0 my-2 w-full bg-[#2222225f] rounded md:w-[80%] lg:w-[60%] focus:bg-gray-700 border border-gray-700 p-1'/>
    <textarea name="" id="" value={fullmsg.message} onChange={(e)=>{setFullmsg({...fullmsg,message:e.target.value})}} placeholder='Write Your Message...' className='focus:outline-0 my-2 w-full bg-[#2222225f] rounded md:w-[80%] lg:w-[60%] h-48 focus:bg-gray-700 border border-gray-700 p-1'></textarea>
    <button onClick={()=>{console.log(fullmsg);setFullmsg(initialMsg)}} className='py-1 px-2 rounded hover:bg-[#186246] bg-[#239066] active:bg-green-900'>Submit</button>
    </div>
  </>)
}

export default Contact