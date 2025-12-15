import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export function Layout() {
  return (
    <div>
      <Navbar />
      <section >
        <Outlet />
      </section>
    </div>
  );
}
//       <section className="bg-amber-200 flex justify-center">
