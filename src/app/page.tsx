"use client"

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { XIcon } from "lucide-react";
import AutoScrollingGallery from "./components/grid-image";

export default function Home() {

  const paragraphs = [
    "สวัสดีครับ... อันนี้ใครหรอครับ ?",
    "คุณใช่แฟนของผมรึป่าว ?",
    "ถ้าคุณคือฟ้าใสตัวจริง...",
    "รบกวนตอบคำถามต่อไปนี้ด้วยครับ...",
    "รบกวนช่วยบอกวันที่ที่เราคบกันทีครับ...",
    "ผมสูงเท่าไหร่ ?",
    "สรรพนามที่เราใช้เรียกกันคือ ?",
    "ผมใส่แว่นหรือไม่ ?",
    "คุณผ่านจนมาถึงด่านสุดท้ายแล้วคำถามสุดท้ายนี้จะทำให้ผมมั่นใจได้ว่าคุณคือแฟนของผม...",
    "ผมชอบอะไรในตัวคุณ ?",
    "ฮ่าาา มะกี้เค้าหยอกเล่น บิบิตอบอะไรก็ได้ทั้งหมดนั่นแหละค่ะ",
    "สวัสดีนะคะแฟนของเค้าวันนี้วันอะไรเอ่ย ??",
    "ตอนนี้ครบรอบ 1 ปี แล้วนะคะที่เค้าได้รัก บิบิ",
    "ที่ผ่านมาบิบิทำให้เค้ามีความสุขม้ากม้าก หวังว่าตอนนี้บิบิก็คงกำลังมีความสุขอยู่ นะคะ",
    "เค้ารักบิบินะคะ ❤️"
  ]

  const questions = {
    [4]: [
      ["19 กุมภาพันธ์ 2024", true],
      ["1 มกราคม 2024", false],
      ["24 มีนาคม 2024", false]
    ],
    [5]: [
      ["181 เซนติเมตร", false],
      ["180 เซนติเมตร", false],
      ["183 เซนติเมตร", true],
    ],
    [6]: [
      ["ตัวเอง", false],
      ["บิบิ", true],
      ["เธอ", false]
    ],
    [7]: [
      ["ใส่", true],
      ["ไม่ใส่", false]
    ],
    [9]: [
      ["หน้าตา รูปลักษณ์ภายนอก", true],
      ["น่มน้ม ิิ", true],
      ["แจ้มบิบิ", true]
    ]
  }

  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isWrong, setIsWrong] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {

    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("ไม่สามารถเล่นเสียงได้:", error);
      });
    }

    if (index in questions) return

    if (index > 15) return

    setIsFading(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1));
      setIsFading(false);
    }, 500);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>, state: boolean) => {
    e.preventDefault();
    if (state) {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1));
        setIsFading(false);
      }, 500);

      return
    }

    setIsWrong(true)
  }

  return (
    <main onClick={handleClick} className="relative w-screen h-dvh bg-[url(/paper-texture.jpg)] bg-cover bg-center flex flex-col justify-center items-center gap-6 p-3">

      <audio ref={audioRef} loop hidden>
        <source src="/audio/sound.mp3" type="audio/mpeg" />
      </audio>

      {index < 15 && (
        <motion.img
          alt=""
          src={'/dog-flower.png'}
          width={256}
          height={256}
          className={`absolute bottom-0 right-4 sm:w-1/3 lg:w-52 transition-opacity duration-300 ease-in-out ${questions[index as keyof typeof questions] == null ? 'opacity-100' : 'opacity-0'}`}
          initial={{ x: 0 }}
          animate={{
            x: [0, 10, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      <p className={`text-2xl md:text-6xl text-[rgba(144,99,48,0.85)] text-center drop-shadow-md
      transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {paragraphs[index]}
      </p>

      {questions[index as keyof typeof questions] ? questions[index as keyof typeof questions].map((question, questionIndex) => (
        <div key={questionIndex} className={`flex flex-row justify-center w-full items-center gap-3 px-20 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          <button className="z-10 bg-[#F9F7F0] w-full  py-2 rounded-full border-2 border-[#4a4947] justify-center items-center gap-2.5 inline-flex" onClick={(e) => { handleSubmit(e, question[1] as boolean) }}> {question[0]} </button>
        </div>
      )) : null}

      {isWrong && <div className={`w-full h-52 flex justify-center items-center absolute px-6`}>
        <div className={`w-full h-full rounded-2xl drop-shadow-2xl bg-white border-b-4 border`}>
          <div className="w-full h-full flex justify-center items-center gap-2">
            <motion.img
              alt=""
              src={'/cat-angry.png'}
              width={256}
              height={256}
              className="w-1/3"
              initial={{ y: 0, x: 0, opacity: 1 }}
              animate={{
                x: [0, 10, 0],
                y: [0, 5, 0]
              }}
              transition={{
                duration: .7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <p className="text-center text-red-700 px-2 font-medium"> ไออ้วนตอบคำถามของเค้าผิดได้ไง หื้อออ !!! โกดแล่ว</p>
          </div>
          <button className="border-2 rounded-full absolute top-2 right-[10%]" onClick={() => { setIsWrong(!isWrong) }}><XIcon className="font-bold" /></button>
        </div>
      </div>}

      <div className={`z-0 absolute flex justify-center items-center flex-col gap-4 transition-opacity duration-300 ease-in-out ${index == 15 ? 'opacity-100' : 'opacity-0'}`}>
        <img src="/car-flower.png" alt="gib flower" className="w-2/4" />
        <p className="text-4xl  text-[rgba(144,99,48,0.85)]">เค้าให้ 🫶🏻</p>
        <p className="text-[rgba(144,99,48,0.85)]">กดต่อไปเพื่อดูรูปน่ารักของบิบิ 💗</p>
      </div>

      {index == 16 && (
        <div className="flex flex-wrap justify-center items-center gap-12">
          <AutoScrollingGallery />
          <button className="absolute z-2 bg-[#F9F7F0] px-2 py-1 rounded-full border-2 border-[#4a4947] bottom-5"> นี่คือรูปเกือบทั้งหมดของบิบิในระยะเวลา 1 ปี ❗️ </button>
        </div>
      )}
    </main>
  );
}
