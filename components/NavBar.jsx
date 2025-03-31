import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-black border-b border-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-500">
        HOI4 Strategy Guide
      </h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/related">Related</Link>
        </li>
      </ul>
    </nav>
  );
}
