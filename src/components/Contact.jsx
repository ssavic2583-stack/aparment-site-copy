import { useState, useMemo } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion" 
import { useTheme } from '../context/ThemeContext'

export default function ContactForm() {
  const { theme, toggleTheme } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMessage] = useState("");


  // today in YYYY-MM-DD
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  // ensure checkout is never before checkin
  const onCheckInChange = (e) => {
    const v = e.target.value;
    setCheckIn(v);
    if (checkOut && checkOut < v) setCheckOut(v);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send data (EmailJS, Formspree, or your API)
    console.log({ name, email, checkIn, checkOut, message });
  };

  return (

    <motion.div
      key={theme}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    className="width-full py-13 my-17 bg-neutral-100 dark:dark:bg-zinc-800 justify-center gap-8">
    <h2 className="text-3xl font-luxury font-bold text-center text-gray-800 dark:text-white pt-8">
      Contact us
    </h2>
    <div className="flex justify-center gap-8">
      <form onSubmit={onSubmit} className="w-1/2 p-auto font-basic text-gray-700 dark:dark:bg-zinc-800 dark:text-white pt-8 ">
        {/* Row: Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block text-left">
            <span className="block dark:force-color">Your Name</span>
            <input
              className="mt-2 w-full border border-gray-300 dark:border-gray-600 rounded py-3 px-4 bg-white  outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </label>

          <label className="block text-left">
            <span className="block dark:text-white">Your Email</span>
            <input
              className="mt-2 w-full border border-gray-300 dark:border-gray-600 rounded py-3 px-4 bg-white  outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </label>
        </div>

        {/* Row: Check-in + Check-out (date pickers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <label className="block text-left">
            <span className="block dark:text-white">Check-in</span>
            <input
              className="mt-2 w-full border border-gray-300 dark:border-gray-600 rounded py-3 px-4 bg-white outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              name="checkin"
              min={today}
              value={checkIn}
              onChange={onCheckInChange}
              required
            />
          </label>

          <label className="block text-left">
            <span className="block dark:text-white">Check-out</span>
            <input
              className="mt-2 w-full border border-gray-300 dark:border-gray-600 rounded py-3 px-4 bg-white outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              name="checkout"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </label>
        </div>


        {/* Message */}
        <label className="block text-left mt-6">
          <span className="block dark:text-white">Message</span>
          <textarea
            className="mt-2 w-full border border-gray-300 dark:border-gray-600 rounded py-3 px-4 h-48 resize-none bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>


        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-12 mt-6 mb-10 rounded transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </motion.div>
  );
}
