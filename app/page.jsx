"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <main className="container mx-auto p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js Site</h1>
          <p className="text-xl mb-8">This is a sample homepage with a beautiful gradient background.</p>
          <Link href="/test" className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
            Test
          </Link>
        </div>
      </main>
    </div>
  );
}
