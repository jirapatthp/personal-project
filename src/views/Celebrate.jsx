import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import BirthdayCandle from "../components/BirthdayCandle";

export default function Celebrate() {
  // 🩷 State หลัก
  const [name, setName] = useState("");
  const [hasName, setHasName] = useState(false);
  const [cake, setCake] = useState(null);
  const [wish, setWish] = useState("");
  const [showCandle, setShowCandle] = useState(false); // 🕯 เพิ่ม state สำหรับเทียน
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const ballpitRef = useRef(null);

  // 🎂 ลิสต์รูปเค้ก
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
    "https://i.pinimg.com/736x/97/60/12/9760124ae9acff9948f688754f65482e.jpg",
  ];

  // 💌 ลิสต์คำอวยพร
  const wishes = [
    "Hope this year wraps you in warmth, wonder, and whipped cream ☁️",
    "⋆⋆☆⋆⋆ Happy birthday cutie! 🎂",
    "Wishing you a year that feels like sunlight after rain 🌈",
    "Here's to another year of beautiful chaos and happy crumbs 🍓",
    "Hope your dreams bloom like frosting on a perfect cake 🌷",
    "May today remind you how loved you already are 💖",
    "Tiny cake. Huge joy. 🍰",
    "You make ordinary look lovely 🌈",
    "Keep smiling — it suits you ridiculously well 😋",
    "You're the sparkle in someone's sky ✨",
  ];

  // 🎲 ฟังก์ชันสุ่มเค้ก + คำอวยพร
  const handleRoll = () => {
    const randomCake = cakes[Math.floor(Math.random() * cakes.length)];
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setCake(randomCake);
    setWish(randomWish);
    setShowCandle(true); // 🕯 แสดงเทียนหลังจากสุ่มเค้ก
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });

    // เสียงเล็กน้อยเวลาเทียนโผล่
    new Audio(
      "https://cdn.pixabay.com/download/audio/2023/04/04/audio_1692b4623f.mp3"
    ).play();

    if (!isPlaying) toggleMusic();
  };

  const toggleMusic = () => setIsPlaying(!isPlaying);

  const handleStart = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setHasName(true);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-yellow-50 text-center overflow-hidden">
      {/* 🎵 เพลง YouTube */}
      {isPlaying && (
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/8ugwWhJLEls?autoplay=1&loop=1&playlist=8ugwWhJLEls&controls=0"
          title="Birthday Song"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      )}

      {/* 🎠 Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-gray-500 mb-8 mt-8 tracking-wide">
          Rolling Birthday
        </h1>

        {/* 💬 Step 1 — กรอกชื่อ */}
        {!hasName ? (
          <form onSubmit={handleStart} className="flex flex-col items-center gap-4">
            <p className="text-lg text-gray-600">Whose birthday is it today? 🎂</p>
            <input
              type="text"
              placeholder=" name is ..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded-full focus:outline-none text-center text-gray-700 shadow-sm"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[url('https://i.pinimg.com/736x/fd/05/2a/fd052aa0606de9ade0e4fcbe89a13195.jpg')] text-gray-700 text-xl font-bold hover:cursor-pointer rounded-full hover:bg-[url('https://i.pinimg.com/736x/56/42/01/564201b4e34df7a461ab68430608067d.jpg')] hover:scale-[1.1] transition"
            >
              Let's celebrate
            </button>
          </form>
        ) : (
          // 💫 Step 2 — หน้าฉลอง
          <>
            <h2 className="text-xl md:text-3xl font-semibold text-gray-500 mb-6">
             ˚ʚ♡ɞ˚ Happy Birthday <span className="text-gray-500">{name}</span> ˚ʚ♡ɞ˚
            </h2>

            {/* 🕯 เทียนโผล่หลังสุ่มเค้ก */}
            {showCandle && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="mt-4"
              >
                <BirthdayCandle />
              </motion.div>
            )}

            {/* 🎂 รูปเค้ก */}
            {cake ? (
              <motion.img
                key={cake}
                src={cake}
                alt="birthday cake"
                className="w-64 h-64 object-cover rounded-2xl shadow-lg mb-6 mt-6"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
              />
            ) : (
              <p className="text-gray-600 mb-2 mt-8">
                Click to roll your birthday cake 🥁
              </p>
            )}

            

            {/* 💌 คำอวยพร */}
            {wish && (
              <motion.p
                key={wish}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className=" md:text-lg text-gray-700 mb-6 max-w-md"
              >
                {wish}
              </motion.p>
            )}

            {/* 🎲 ปุ่ม Roll */}
            <motion.button
              onClick={handleRoll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-gray-800 text-xl bg-[url('https://i.pinimg.com/736x/73/38/04/733804cae53588e6add14f92ffef4a33.jpg')] bg-cover rounded-full shadow-md transition hover:cursor-pointer hover:bg-[url('https://i.pinimg.com/736x/13/67/99/1367995e76e1d882e4c797a047e53b2c.jpg')]"
            >
              Roll 
            </motion.button>

            {/* ⬅️ Back */}
            <motion.button
              onClick={() => navigate("/")}
              whileHover={{ scale: 1.05 }}
              className="mt-6 text-gray-600 text-xl hover:text-gray-700 transition hover:cursor-pointer"
            >
              ← Back
            </motion.button>

            {/* 🔈 ปุ่มเปิด/ปิดเสียง */}
            <motion.button
              onClick={toggleMusic}
              whileHover={{ scale: 1.2 }}
              className="absolute bottom-5 right-5 text-3xl bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white"
            >
              {isPlaying ? "🔈" : "🔇"}
            </motion.button>
          </>
        )}
      </motion.div>
    </div>
  );
}
