import Link from 'next/link';

export default function NavLink({ href, children } : { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-accent hover:text-secondary px-2 py-1 rounded"
      >
        {children}
      </Link>
    </li>
  );
}