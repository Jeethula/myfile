import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-800 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:w-1/4">
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
          An e-learning platform founded in India that offers a wide range of educational content and resources. Known for its interactive video lessons and personalized learning approach, it has gained popularity among students and educators. The platform covers various subjects and provides a flexible learning experience through its digital offerings.
          </p>
        </div>
        <div className="flex flex-col lg:w-1/4 mt-6 lg:mt-0">
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 text-sm">
            <li className="mb-2">
              <a href="/" className="hover:text-white">Home</a>
            </li>
            <li className="mb-2">
              <a href="/practice" className="hover:text-white">practice</a>
            </li>
            <li className="mb-2">
              <a href="/Login" className="hover:text-white">Login</a>
            </li>
            <li className="mb-2">
              <a href="/Admin" className="hover:text-white">Admin</a>
            </li>
            {/* <li className="mb-2">
              <a href="/sports" className="hover:text-white">Sports</a>
            </li> */}
          </ul>
        </div>
        <div className="flex flex-col lg:w-1/4 mt-6 lg:mt-0">
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" >
              <FaFacebookF className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank"> 
              <FaTwitter className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com" target="_blank" >
              <FaInstagram className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://www.youtube.com" target="_blank" >
              <FaYoutube className="text-white text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr className="border-gray-600 my-6" />
    <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
      <p> &copy; 2023 Better Tomorrow. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
