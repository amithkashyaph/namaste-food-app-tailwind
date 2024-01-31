import React from "react";

const Contact = () => {
  return (
    <div className="w-1/3 m-auto h-96  my-14 border border-solid border-gray-300 rounded-md shadow-xl">
      <h2 className="font-bold p-4 m-4 text-3xl text-center">Contact us</h2>
      <form className="flex-col text-center justify-start">
        <input
          type="text"
          placeholder="Type your name"
          className="border border-solid border-gray-500 rounded-md w-9/12 mx-4 my-2 p-4 justify-center "
        />
        <input
          type="text"
          placeholder="Type your message"
          className="border border-solid border-gray-500 rounded-md w-9/12 mx-4 my-2 p-4"
        />
        <button className="block px-8 my-5 mx-auto py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
