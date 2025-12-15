import React, { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const cakes = [
  "🎂 Strawberry Cake",
  "🧁 Vanilla Cupcake",
  "🍰 Chocolate Slice",
  "🍮 Flan Delight",
  "🍓 Berry Cheesecake",
]

const wishes = [
  "ขอให้ปีนี้เป็นปีที่หวานเหมือนเค้กก้อนนี้ 🍰",
  "สุขสันต์วันเกิด! ขอให้ได้ทุกอย่างที่หวัง 🎈",
  "ขอให้มีความสุขมาก ๆ และหัวเราะบ่อย ๆ 😄",
  "วันนี้เป็นวันของคุณ — สนุกให้สุดเลย! 🎉",
  "ขอให้ทุกวันของชีวิตเต็มไปด้วยรอยยิ้ม 🌈",
]

export default function Celebrate() {
  const [cake, setCake] = useState(null)
  const [wish, setWish] = useState("")
  const navigate = useNavigate()

  const handleRoll = () => {
    const randomCake = cakes[Math.floor(Math.random() * cakes.length)]
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)]
    setCake(randomCake)
    setWish(randomWish)
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-yellow-50 text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold text-pink-600 mb-8">
        🎠 Rolling Birthday 🎂
      </h1>

      {cake ? (
        <motion.div
          key={cake}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="mb-6 text-3xl"
        >
          {cake}
        </motion.div>
      ) : (
        <p className="text-gray-600 mb-4">
          กดปุ่มด้านล่างเพื่อสุ่มเค้กและคำอวยพร 🎲
        </p>
      )}

      {wish && (
        <motion.p
          key={wish}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 mb-6"
        >
          {wish}
        </motion.p>
      )}

      <button
        onClick={handleRoll}
        className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 shadow-md transition"
      >
        🎲 Roll Again
      </button>

      <button
        onClick={() => navigate("/")}
        className="mt-6 text-gray-500 underline hover:text-gray-700 transition"
      >
        ← กลับไปหน้าแรก
      </button>
    </motion.div>
  )
}
