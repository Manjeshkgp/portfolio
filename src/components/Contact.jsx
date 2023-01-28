import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const initialMsg = {
    name: "",
    email: "",
    message: "",
  };
  const [fullmsg, setFullmsg] = useState(initialMsg);
  return (
    <>
      <form
      ref={formRef}
        className="my-12 flex flex-col mx-6 lg:mx-40 items-center justify-around"
        onSubmit={(e) => {
          e.preventDefault();
          if(fullmsg.message===""){
            alert("You can't let the message box empty");
            return;
          }
          emailjs
            .sendForm(
              process.env.REACT_APP_EMAILJS_SERVICE_ID,
              process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
              formRef.current,
              "YvlzowLbE6KMd2Gbi"
            )
            .then(
              (result) => {
                console.log(result.text);
                alert("Message Sent Successfully");
              },
              (error) => {
                console.log(error.text);
              }
            );
          setFullmsg(initialMsg);
        }}
      >
        <input
          type="text"
          name="name"
          value={fullmsg.name}
          onChange={(e) => {
            setFullmsg({ ...fullmsg, name: e.target.value });
          }}
          placeholder="Name"
          className="focus:outline-0 my-2 w-full bg-[#2222225f] rounded md:w-[80%] lg:w-[60%] focus:bg-gray-700 border border-gray-700 p-1"
        />
        <input
          type="email"
          name="email"
          value={fullmsg.email}
          onChange={(e) => {
            setFullmsg({ ...fullmsg, email: e.target.value });
          }}
          placeholder="Email"
          className="focus:outline-0 my-2 w-full bg-[#2222225f] rounded md:w-[80%] lg:w-[60%] focus:bg-gray-700 border border-gray-700 p-1"
        />
        <textarea
          name="message"
          id=""
          value={fullmsg.message}
          onChange={(e) => {
            setFullmsg({ ...fullmsg, message: e.target.value });
          }}
          placeholder="Write Your Message..."
          className="focus:outline-0 my-2 w-full bg-[#2222225f] rounded md:w-[80%] lg:w-[60%] h-48 focus:bg-gray-700 border border-gray-700 p-1"
        ></textarea>
        <button
          htmlFor="submit"
          className="py-1 px-2 rounded hover:bg-[#186246] bg-[#239066] active:bg-green-900"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
