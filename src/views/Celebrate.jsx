import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

const cakes = [
  "https://i.pinimg.com/736x/e0/e8/d7/e0e8d73620db92d8903416b52632435c.jpg",
  "https://i.pinimg.com/736x/ed/38/ef/ed38efff831277061d2ba9e0c7e65ecd.jpg",
  "https://i.pinimg.com/736x/e5/36/f7/e536f7c6c02221308a13f659eba7b276.jpg",
  "https://i.pinimg.com/736x/45/b0/74/45b07477545108393c8cadb21879be8e.jpg",
  "https://i.pinimg.com/1200x/5f/d7/83/5fd783e7cd0b2221a509f04a1f1a8fba.jpg",
  "https://i.pinimg.com/736x/24/d8/f4/24d8f47644e55e00c5979c98ee99b187.jpg",
  "https://i.pinimg.com/1200x/d5/e2/06/d5e2060a5854999d6a69ed7ad166fe3e.jpg",
  "https://i.pinimg.com/736x/fa/b5/3f/fab53f8c08e7845f4d58a960a552fb44.jpg",
  "https://i.pinimg.com/1200x/96/35/59/9635593f81a321ec56e66df34fcc731b.jpg",
];

// 💌 คำอวยพร
const wishes = [
  "Hope this year wraps you in warmth, wonder, and whipped cream ☁️",
  "Happy birthday cutie! 🎂",
  "Wishing you a year that feels like sunlight after rain 🌈",
  "Here's to another year of beautiful chaos and happy crumbs 🍓",
  "Hope your dreams bloom like frosting on a perfect cake 🌷",
  "May today remind you how loved you already are 💖",
  "Tiny cake. Huge joy. 🍰",
  "You make ordinary look lovely 🌈",
  "Keep smiling — it suits you ridiculously well 😋",
  "You're the sparkle in someone's sky ✨",
];

export default function Celebrate() {
  const [cake, setCake] = useState(null);
  const [wish, setWish] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const handleRoll = () => {
    const randomCake = cakes[Math.floor(Math.random() * cakes.length)];
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setCake(randomCake);
    setWish(randomWish);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    if (!isPlaying) toggleMusic(); // เล่นเพลงอัตโนมัติครั้งแรก
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-yellow-50 text-center px-6 overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🎵 เพลงจาก YouTube (ฝังแบบซ่อน) */}
      {isPlaying && (
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/ryxAZDmEUHo?autoplay=1&loop=1&playlist=ryxAZDmEUHo&controls=0"
          title="Birthday Song"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}

      {/* 🎠 Title */}
      <h1 className="text-5xl font-bold text-gray-400 mb-8">Rolling Birthday</h1>

      {/* 🍰 รูปเค้ก */}
      {cake ? (
        <motion.div
          key={cake}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="mb-6"
        >
          <motion.img
            key={cake}
            src={cake}
            alt="birthday cake"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg mx-auto"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          />
        </motion.div>
      ) : (
        <p className="text-gray-600 mb-4">Click to roll your birthday cake 🎲</p>
      )}

      {/* 💌 คำอวยพร */}
      {wish && (
        <motion.p
          key={wish}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 mb-6 max-w-md"
        >
          {wish}
        </motion.p>
      )}

      {/* 🎲 ปุ่มสุ่ม */}
      <motion.button
        onClick={handleRoll}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 text-gray-800 bg-[url('https://i.pinimg.com/736x/73/38/04/733804cae53588e6add14f92ffef4a33.jpg')] bg-cover rounded-full shadow-md transition hover:cursor-pointer hover:bg-[url('https://i.pinimg.com/736x/13/67/99/1367995e76e1d882e4c797a047e53b2c.jpg')]"
      >
        Roll Again 🎠
      </motion.button>

      {/* ⬅️ ปุ่มย้อนกลับ */}
      <motion.button
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        className="mt-6 text-gray-500 underline hover:text-gray-700 transition hover:cursor-pointer"
      >
        ← Back
      </motion.button>

      {/* 🔈 ปุ่มเปิด/ปิดเสียง */}
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.2 }}
        className="absolute bottom-5 right-5 text-3xl bg-white/60 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white"
      >
        {isPlaying ? "🔈" : "🔇"}
      </motion.button>
    </motion.div>
  );
}
