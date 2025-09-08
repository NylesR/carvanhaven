import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="bg-primary p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-white font-bold text-xl mb-2 md:mb-0">
          Carvan Haven
        </div>
        <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/location">Location</NavLink>
            <NavLink href="/rates">Rates</NavLink>
            <NavLink href="/amenities">Amenities</NavLink>
            <NavLink href="/support">Support</NavLink>
            <NavLink href="/login">Login</NavLink>
        </ul>
      </div>
    </nav>
  );
}