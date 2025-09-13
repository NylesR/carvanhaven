"use client";

import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="bg-primary p-4">
      <div className="flex items-center justify-between">
        <div className="text-accent font-bold text-xl">
          <a href="/">Carvan Haven</a>
        </div>
        
        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className="md:hidden text-white focus:outline-none hamburger-menu"
          aria-label="Toggle menu"
          onClick={() => {
            const mobileMenu = document.querySelector('.mobile-menu');
            const hamburgerIcon = document.querySelector('.hamburger-icon');
            const closeIcon = document.querySelector('.close-icon');
            
            if (mobileMenu?.classList.contains('hidden')) {
              mobileMenu.classList.remove('hidden');
              hamburgerIcon?.classList.add('hidden');
              closeIcon?.classList.remove('hidden');
            } else {
              mobileMenu?.classList.add('hidden');
              hamburgerIcon?.classList.remove('hidden');
              closeIcon?.classList.add('hidden');
            }
          }}
        >
          <svg
            className="w-6 h-6 hamburger-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className="w-6 h-6 close-icon hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
        </ul>
      </div>

      {/* Mobile Menu - Shows/Hides based on classes */}
      <div className="md:hidden mobile-menu hidden mt-4">
        <ul className="flex flex-col gap-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
        </ul>
      </div>
    </nav>
  );
}