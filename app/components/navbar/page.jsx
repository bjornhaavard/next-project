import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <header className="p-4 shadow-md bg-opacity-75 bg-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">My Next.js Site</Link>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </nav>
  );
}
