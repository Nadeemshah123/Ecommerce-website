"use client"

import { IoIosArrowDown } from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className='text border-b-2 bg-neutral-100'>
      <div className='w-full flex items-center justify-center bg-white h-[70px]'>
        {/* all content */}
        <div className='sm:w-full md:w-[80%]  flex items-center justify-between h-[50px]'>

          <div>
            {/* logo */}
            <h2 className="title-font font-extrabold tracking-widest text-xl mb-3">
        Hekto
        </h2>
          </div>

          {/* links - animated sliding nav */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            }text md:flex md:translate-x-0 md:static w-[50%] md:w-auto md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className=' flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-10 sm:text-md md:text-sm lg:text-md xl:text-md text-white md:text-black '>
              <li className='flex gap-1 p-4 hover:underline hover:text-pink-600 underline-offset-2'>
                <Link href="/">Home </Link> <IoIosArrowDown className='pt-1 text-lg'/>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/pages">Pages</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/GridDefault">Products</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/blog">Blog</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/ShopList">Shop</Link>
              </li>
              <li className='p-4 hover:underline  hover:text-pink-600 underline-offset-2'>
                <Link href="/MyAccount">Contact</Link>
              </li>

            </ul>
          </div>

          <div className='flex gap-x-4 items-center'>
            {/* Search bar - hidden on small screens */}
            <div className='hidden lg:flex w-full bg-gray-200 rounded-md items-center '>
              <input
                className='w-full p-1 border-2 border-gray-200 outline-none'
                type="search"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl ml-3 bg-pink-600 px-1 py-1 text-white"
              />
            </div>

            {/* Toggle Button for mobile */}
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Navbar;