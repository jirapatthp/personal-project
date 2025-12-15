// import { useEffect, useState } from "react";
// import { UserTable } from "../components/UserTable";
// import { AdminTable } from "../components/AdminTable";
// import axios from "axios";

// // const API_GET = "https://jsd5-mock-backend.onrender.com/members";

// const API = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

// // const API = "http://localhost:3000/members";

// export default function Home() {
//   const [view, setView] = useState(null);
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get(API);
//       setUsers(res.data);
//     } catch {
//       alert("Failed to fetch users");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="min-h-screen p-6 gap-y-6 flex flex-col justify-start w-full">
//       <section className="mt-20 text-5xl font-extrabold text-center">
//         <h1>Generation Thailand</h1>
//         <h1>React Assessment</h1>
//       </section>
//       <section className="flex justify-center gap-x-3 font-bold">
//         <button
//           onClick={() => setView("user")}
//           className=" p-5 bg-sky-200 flex rounded-2xl cursor-pointer border hover:bg-sky-300"
//         >
//           User Section
//         </button>
//         <button
//           onClick={() => setView("admin")}
//           className=" p-5 bg-rose-100 flex rounded-2xl cursor-pointer border hover:bg-rose-200"
//         >
//           Admin Section
//         </button>
//       </section>
//       <section className="w-full flex justify-center gap-x-3">
//         {view === "user" ? (
//           <section className=" p-5  flex">
//             <UserTable users={users} />
//           </section>
//         ) : view === "admin" ? (
//           <section className=" p-5  flex">
//             {" "}
//             <AdminTable
//               users={users}
//               setUsers={setUsers}
//               fetchUsers={fetchUsers}
//               API={API}
//             />
//           </section>
//         ) : null}
//       </section>
//     </div>
//   );
// }

import { motion } from "framer-motion"
import cakePink from "../assets/cake-pink.jpg"
import cakeBlue from "../assets/cake-blue.jpg"
import cakeWhite from "../assets/cake-white.jpg"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const cakes = [cakePink, cakeBlue, cakeWhite]
   const navigate = useNavigate()

  return (
    <div className="relative min-h-screen bg-white flex flex-col overflow-hidden">
      {/* --- Navbar --- */}
      {/* <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-gray-600 z-20">
        <h1 className="font-bold text-xl text-gray-800">🎂 Rolling Birthday</h1>
        <ul className="flex gap-8">
          <li className="hover:text-pink-500 cursor-pointer">About</li>
          <li className="hover:text-pink-500 cursor-pointer">Play</li>
          <li className="hover:text-pink-500 cursor-pointer">Gift</li>
        </ul>
      </nav> */}

      {/* --- Hero Section --- */}
      <main className="flex flex-col items-center justify-center text-center flex-1 mt-20 z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[9rem] leading-none font-extrabold text-gray-900 tracking-tight"
        >
          rolling
          <br />
          birthday
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-md text-gray-600 mt-6 text-lg"
        >
          Celebrate your day with a digital surprise.
          <br /> Click below to start the fun 🎠
        </motion.p>

         <button
          onClick={() => navigate("/celebrate")}
          className="mt-10 px-8 py-4 bg-pink-500 text-white rounded-full shadow-lg font-semibold hover:bg-pink-600 transition"
        >
          Let's Celebrate 🎉
        </button>
      </main>

      {/* --- Floating Cakes --- */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {cakes.map((cake, index) => (
          <motion.img
            key={index}
            src={cake}
            alt="cake"
            className="w-40 md:w-52 absolute"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: [20 * index, -20 * index, 20 * index],
              opacity: 1,
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + index,
              ease: "easeInOut",
            }}
            style={{
              top: `${20 + index * 15}%`,
              left: `${15 + index * 25}%`,
            }}
          />
        ))}
      </div>

      {/* --- Footer --- */}
      <footer className="py-6 text-gray-400 text-sm text-center z-20">
        <p> — Rolling Birthday Project - </p>
      </footer>
    </div>
  )
}
