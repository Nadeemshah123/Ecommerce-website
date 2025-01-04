import React from 'react'
import {FaFacebook, FaGithub} from 'react-icons/fa'
import { RxInstagramLogo } from "react-icons/rx";
import {FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div>
        <footer className="text-gray-600 body-font bg-[#E7E4F8]">
  <div className="container px-5 py-24 mx-auto mt-[40px]">
    <div className="flex flex-wrap md:text-left text-center order-first">


    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
        Hekto
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
            </label>
            <input
              type="text"
              id="footer-field"
              placeholder='Enter Email Address'
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-0 px-8 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#FB2E86] py-1 px-4 focus:outline-none hover:bg-pink-600 rounded ">
            Sign-Up
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
        Contact Info
          <br className="lg:block hidden" />
          17 Princess Road, London, Greater London NW1 8JR, UK
        </p>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3 ml-6">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10 text-[#8A8FB9] space-y-4">
          <li>
            <a className="  ml-6">Laptops & Computers</a>
          </li>
          <li>
            <a className="ml-6">Cameras & Photography</a>
          </li>
          <li>
            <a className="ml-6">Smart Phones & Tablets</a>
          </li>
          <li>
            <a className="ml-6">Video Games & Consoles</a>
          </li>
          <li>
            <a className="ml-6">Waterproof Headphones</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
        Customer Care
        </h2>
        <nav className="text-[#8A8FB9] list-none mb-10 space-y-4">
          <li>
            <a className="">My Account</a>
          </li>
          <li>
            <a className="">Discount</a>
          </li>
          <li>
            <a className="">Returns</a>
          </li>
          <li>
            <a className="">Orders History</a>
          </li>
          <li>
            <a className="">Order Tracking</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
        Pages
        </h2>
        <nav className="list-none mb-10 text-[#8A8FB9] space-y-4">
          <li>
            <a className="">Blog</a>
          </li>
          <li>
            <a className="">Browse the Shop</a>
          </li>
          <li>
            <a className="">Category</a>
          </li>
          <li>
            <a className="">Pre-Built Pages</a>
          </li>
          <li>
            <a className="">Visual Composer Elements</a>
          </li>
          <li>
            <a className="">WooCommerce Pages</a>
          </li>
        </nav>
      </div>
      
    </div>
  </div>
  <div className="bg-[#E7E4F8]">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        © 2024 Hekto —
        <a
          href="https://twitter.com/knyttnev"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          @Right Reserved
        </a>
      </p>
      <span className="icons inline-flex sm:ml-auto sm:mt-0 mt-4 xl:mr-52 justify-center sm:justify-start">
     <div className='text-2xl ml-3" '><FaFacebook  /></div> 
      <div className='text-2xl ml-3 '><RxInstagramLogo /></div>
        <div className='text-2xl ml-3'><FaTwitter  /></div>

    </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer