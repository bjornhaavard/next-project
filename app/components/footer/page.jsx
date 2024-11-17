" use client";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Next.js Site. All rights reserved.</p>
        <nav className="mt-2">
          <Link href="/about" className="text-gray-400 hover:text-white mx-2">
            About
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white mx-2">
            Contact
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
