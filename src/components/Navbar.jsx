import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul className="flex justify-end px-10 items-center w-full bg-pink-50 h-14 border-b-1 border-black gap-x-6 text-2xl text-black ">
        <li>
          <Link to="/" className="hover:text-red-800">
            Home
          </Link>
        </li>
        <li>
          <Link to="/owner" className="hover:text-red-800">
            Owner
          </Link>
        </li>
      </ul>
    </nav>
  );
}
