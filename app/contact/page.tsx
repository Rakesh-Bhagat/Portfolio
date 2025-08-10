"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { IconSend2 } from "@tabler/icons-react";
import { div } from "motion/react-client";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [received, setReceived] = useState(false);

  const handleSubmit = async (e:React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      console.log(res)
      if (res.ok) {
        setReceived(true)
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  };
  return (
    <div className=" h-screen mx-auto w-full md:max-w-2xl flex flex-col font-poppins px-5">
      <Navbar />
      <h1 className="text-4xl font-bold ">Contact me</h1>
      {received && (
        <div className="mt-10 flex gap-2">
            <p className="">Thanks for the message. I will try to reply as soon as possible.</p>
            <button onClick={()=>setReceived(false)} className="bg-yellow-200 px-3 rounded-md text-neutral-600 cursor-pointer">Message again</button>
        </div>
        )}
      {!received && (
      <div className="flex flex-col ">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10 mb-2 md:my-10">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="border border-neutral-200 rounded-md shadow-sm px-3 py-1"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="border border-neutral-200 rounded-md shadow-sm px-3 py-1"
            />
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="desc"
            id="desc"
            placeholder="Leave feedback about site, Career Opurtunities or just say hello etc."
            className="border w-full border-neutral-200 rounded-md shadow-sm px-3 py-1 h-24"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-900 text-neutral-100 rounded-md px-4 py-2 mt-2 text-sm flex justify-center font-semibold font-inter w-full cursor-pointer"
          >
            Send Message <IconSend2 className="flex ml-2" />
          </button>
        </form>
      </div>)}
      
      <Footer />
    </div>
  );
};

export default Contact;
