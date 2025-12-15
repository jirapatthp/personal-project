import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function BirthdayCandle() {
  const [isLit, setIsLit] = useState(true);
  const [listening, setListening] = useState(false);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    if (listening) startListening();
    return stopListening;
  }, [listening]);

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
      sourceRef.current.connect(analyserRef.current);
      dataArrayRef.current = new Uint8Array(analyserRef.current.frequencyBinCount);
      detectBlow();
    } catch (error) {
      console.error("Microphone error:", error);
    }
  };

  const stopListening = () => {
    if (audioContextRef.current) audioContextRef.current.close();
  };

  const detectBlow = () => {
    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;

    const check = () => {
      analyser.getByteTimeDomainData(dataArray);
      const volume = dataArray.reduce((acc, val) => acc + Math.abs(val - 128), 0) / dataArray.length;

      // 🔥 ถ้าเสียงดังเกิน 15 (เป่าแรง)
      if (volume > 15 && isLit) {
        setIsLit(false);
        setListening(false);
      }

      if (listening) requestAnimationFrame(check);
    };
    requestAnimationFrame(check);
  };

  const relight = () => {
    setIsLit(true);
    setListening(false);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="relative w-4 h-16 bg-yellow-200 rounded-full shadow-sm">
        {/* เปลวไฟแบบ gradient */}
        {isLit && (
          <motion.div
            className="absolute -top-5 left-1/2 w-5 h-5 rounded-full -translate-x-1/2"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #FFD580, #FF9B9B 70%)",
              filter: "blur(1px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
              y: [0, -2, 0],
            }}
            transition={{ repeat: Infinity, duration: 0.6 }}
          />
        )}
        {!isLit && (
          <motion.div
            className="absolute -top-5 left-1/2 w-5 h-5 rounded-full -translate-x-1/2"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #c2c1bd, #8f8c8c 70%)",
              filter: "blur(1px)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.5, y: -10 }}
            transition={{ duration: 1 }}
          />
        )}
      </div>

      <div className="mt-4 flex gap-3">
        {!listening ? (
          <button
            onClick={() => setListening(true)}
            className="px-3 py-1 bg-pink-200 rounded-full hover:bg-pink-300 transition text-sm"
          >
            Blow  🎤
          </button>
        ) : (
          <p className="text-gray-500 text-sm">Listening... blow gently! 🌬️ <br />
          make a wish </p>
        )}

        {/* {!isLit && (
          <button
            onClick={relight}
            className="px-3 py-1 bg-yellow-100 rounded-full hover:bg-yellow-200 transition text-sm"
          >
            Relight 🔥
          </button>
        )} */}
      </div>
    </div>
  );
}
