import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

function Navigationbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const address = useAddress();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </span>
          <div className="flex md:order-2">
            <ConnectWallet/>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
  className={`items-center justify-center ${
    isMobileMenuOpen ? 'flex' : 'hidden'
  } w-full md:flex md:w-auto md:order-1`}
  id="navbar-cta"
>

<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 z-20 w-full">

              <li>
                <Link href="/" passHref>
                  <span
                    className={`block py-2 pl-3 pr-4 rounded ${
                      router.pathname === '/'
                        ? 'text-white bg-blue-700'
                        : 'text-gray-900 hover:bg-gray-100'
                    } md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                    aria-current="page"
                  >
                    Home
                  </span>
                </Link>
              </li>
              {address && (
                <>
                  <li>
                    <Link href="/about" passHref>
                      <span
                        className={`block py-2 pl-3 pr-4 rounded ${
                          router.pathname === '/about'
                            ? 'text-white bg-blue-700'
                            : 'text-gray-900 hover:bg-gray-100'
                        } md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                      >
                        About
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/service" passHref>
                      <span
                        className={`block py-2 pl-3 pr-4 rounded ${
                          router.pathname === '/service'
                            ? 'text-white bg-blue-700'
                            : 'text-gray-900 hover:bg-gray-100'
                        } md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                      >
                        Services
                      </span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigationbar;
