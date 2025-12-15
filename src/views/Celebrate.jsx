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
  "https://i.pinimg.com/736x/97/60/12/9760124ae9acff9948f688754f65482e.jpg",
  "https://i.pinimg.com/736x/4a/5f/7f/4a5f7fdf735cc8a214ad8ced216c3a42.jpg",
  "https://i.pinimg.com/736x/16/7e/f3/167ef30e9421fa0948d9bda6fe5719b2.jpg",
  "https://i.pinimg.com/1200x/cc/59/a1/cc59a1248d86a3e7a3f99ad0d6f782f1.jpg",
  "https://i.pinimg.com/736x/4d/b2/bb/4db2bb203ca838ebe31464db0d56f672.jpg",
  "https://i.pinimg.com/736x/98/0b/91/980b91c18c82015703782c5a1a4414d8.jpg"
];

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
  "Wishing you sparkles, naps, and endless slices of cake ✨🍰",
"Let today be the start of your sweetest chapter yet 📖🎂",
"Wishing you a year that feels like a warm blanket and slow mornings ☁️🍓",
"May your coffee be strong and your peace even stronger ☕️",
"The world’s better because you’re in it — stay that way 🌷",
"Wishing you giggles, sprinkles, and sunshine ☀️🧁"


];

export default function Celebrate() {
  const [cake, setCake] = useState(null);
  const [wish, setWish] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const ballpitRef = useRef(null);

  // 🎲 สุ่มเค้ก + คำอวยพร + confetti + ลูกบอลพุ่ง
  const handleRoll = () => {
    const randomCake = cakes[Math.floor(Math.random() * cakes.length)];
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setCake(randomCake);
    setWish(randomWish);

    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });

    if (ballpitRef.current) ballpitRef.current.spawn(10); // สร้างลูกบอลเพิ่มตอนกด
    if (!isPlaying) toggleMusic(); // เปิดเพลงอัตโนมัติถ้ายังไม่ได้เปิด
  };

  const toggleMusic = () => setIsPlaying(!isPlaying);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-yellow-50 text-center overflow-hidden">
      {/* 🎵 เพลง YouTube (ซ่อนอยู่) */}
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

      {/* 🎠 Content (อยู่หน้า ballpit) */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-gray-500 mb-8 tracking-wide">
          Rolling Birthday
        </h1>

        {cake ? (
          <motion.img
            key={cake}
            src={cake}
            alt="birthday cake"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg mb-6"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          />
        ) : (
          <p className="text-gray-600 mb-4 text-lg">
            Click to roll your birthday cake 🎲
          </p>
        )}

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

        <motion.button
          onClick={handleRoll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 text-gray-800 bg-[url('https://i.pinimg.com/736x/73/38/04/733804cae53588e6add14f92ffef4a33.jpg')] bg-cover rounded-full shadow-md transition hover:cursor-pointer hover:bg-[url('https://i.pinimg.com/736x/13/67/99/1367995e76e1d882e4c797a047e53b2c.jpg')]"
        >
          Roll Again 🎠
        </motion.button>

        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          className="mt-6 text-gray-500  hover:text-gray-700 transition hover:cursor-pointer"
        >
          ← Back
        </motion.button>

        <motion.button
          onClick={toggleMusic}
          whileHover={{ scale: 1.2 }}
          className="absolute bottom-5 right-5 text-3xl bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white"
        >
          {isPlaying ? "🔈" : "🔇"}
        </motion.button>
      </motion.div>
    </div>
  );
}
