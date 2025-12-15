import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul className="flex justify-end px-10 items-center w-full bg-[url('https://i.pinimg.com/1200x/3d/88/71/3d8871cc9c605f7c31213ea3646083b5.jpg')] h-14 gap-x-12 text-2xl text-black  ">
        <li>
          <Link to="/" className="hover:text-red-800  ">
            Home
          </Link>
        </li>
        <li>
          <Link to="/owner" className="hover:text-red-800 ">
            Owner
          </Link>
        </li>
      </ul>
    </nav>
  );
}
