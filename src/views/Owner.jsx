import coldcereal from "../assets/colddcereal.png";
import { motion } from "framer-motion";

export default function Owner() {
  return (
    <div className="min-h-screen flex flex-col items-center  pt-12 gap-y-3 bg-[url('https://i.pinimg.com/1200x/a8/ad/0a/a8ad0a9fd69b2e11324c16bd93bb6406.jpg')]">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center leading-none  tracking-tight"
      >
        coldd cereal
      </motion.h1>
      {/* <h1 className="text-4xl font-bold text-center">coldd cereal</h1> */}
      <img src={coldcereal} alt="user image" className="w-64 rounded-2xl" />
      <p className="text-center">
        <span className="font-bold text-lg">
          hi <br /> ꒒ ০ ⌵ ୧ ♡
        </span>
        <div className="text-[1rem] md:text-lg">
        <br />I created Rolling Birthday <br /> as a small digital gift ┆ ° ♡ • ✩ ◛ °
        <br /> a place where anyone can feel <br /> a bit of joy on their special day.{" "}
        <br />
        Just spin, smile, and celebrate. <br /> You deserve it.
        </div>
      </p>
    </div>
  );
}
