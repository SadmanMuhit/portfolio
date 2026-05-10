"use client";
import React from "react";
import Logo from "@/assets/logo/logo";

function  Footer2() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const socialIcons = [
    {
      name: "LinkedIn",
      href: "#",
      svg: (
        <svg
          className="size-6 transition-transform duration-200 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61589014471017",
      svg: (
        <svg
          className="size-6 transition-transform duration-200 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
          ></path>
        </svg>
      ),
    },
    {
      name: "Github",
      href: "https://github.com/SadmanMuhit",
      svg: (
        <svg
          className="size-6 transition-transform duration-200 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504c.5.092.682-.217.682-.483c0-.237-.008-.866-.013-1.7c-2.782.605-3.37-1.343-3.37-1.343c-.455-1.158-1.11-1.466-1.11-1.466c-.908-.62.069-.608.069-.608c1.004.07 1.532 1.032 1.532 1.032c.892 1.53 2.341 1.088 2.91.832c.092-.647.35-1.088.636-1.338c-2.22-.253-4.555-1.113-4.555-4.951c0-1.093.39-1.988 1.029-2.688c-.103-.253-.446-1.272.098-2.65c0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.705.115 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027c.546 1.379.202 2.398.1 2.651c.64.7 1.028 1.595 1.028 2.688c0 3.848-2.339 4.695-4.566 4.943c.359.31.678.92.678 1.855c0 1.338-.012 2.419-.012 2.747c0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden ">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="mb-8 flex items-center justify-center">
          <Logo />
        </div>

        <nav className="mb-6 w-full">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-900 dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="my-6 flex flex-wrap justify-center gap-4 text-sm">
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.name}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              href={icon.href}
            >
              {icon.svg}
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} seraui. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer2;
