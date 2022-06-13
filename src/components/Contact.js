import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full bg-[#0a192f] flex justify-center items-center sm_padding_top px-4"
    >
      <form
        action="https://getform.io/f/22072039-1e22-4641-92f6-24eabc6afdf9"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-gray-300">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="py-4">
            // Submit the form below or shoot me an email -
            pittu31meena@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="bg-[#ccd6f6] p-2 my-4"
        />
        <textarea
          name="message"
          placeholder="Message"
          cols="30"
          rows="4"
          className="bg-[#ccd6f6] p-2"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
