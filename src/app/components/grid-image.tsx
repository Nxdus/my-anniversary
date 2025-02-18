import React from "react";
import { motion } from "framer-motion";

// รายการ URL รูปตัวอย่าง (อัตราส่วน 9:16)
const images = [
  "/bibi/1.jpeg",
  "/bibi/2.jpeg",
  "/bibi/3.jpeg",
  "/bibi/4.jpeg",
  "/bibi/5.jpeg",
  "/bibi/6.jpeg",
  "/bibi/7.jpeg",
  "/bibi/8.jpeg",
  "/bibi/9.jpeg",
  "/bibi/10.jpeg",
  "/bibi/11.jpeg",
  "/bibi/12.jpeg",
  "/bibi/13.jpeg",
  "/bibi/14.jpeg",
  "/bibi/15.jpeg",
  "/bibi/16.jpeg",
  "/bibi/17.jpeg",
  "/bibi/18.jpeg",
  "/bibi/19.jpeg",
  "/bibi/20.jpeg",
  "/bibi/21.jpeg",
  "/bibi/22.jpeg",
  "/bibi/23.jpeg",
  "/bibi/24.jpeg",
  "/bibi/25.jpeg",
  "/bibi/26.jpeg",
  "/bibi/27.jpeg",
  "/bibi/28.jpeg",
  "/bibi/29.jpeg",
  "/bibi/30.jpeg",
];

// Component แสดง grid รูปภาพ
const Grid: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="w-40 aspect-[9/16] bg-gray-200 overflow-hidden rounded-md"
        >
          <img
            src={src}
            alt={`Image ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

const AutoScrollingGallery: React.FC = () => {
  return (
    // Container ที่มีความสูงคงที่และ overflow-hidden เพื่อซ่อนส่วนที่เลื่อนออกไป
    <div className="absolute overflow-hidden">
      {/* motion.div ที่มีสองชุด grid เพื่อให้เลื่อนแบบ loop อย่างต่อเนื่อง */}
      <motion.div
        className="flex flex-col"
        animate={{ y: ["0%", "-50%"] }} // เลื่อนขึ้นเท่ากับความสูงของ grid หนึ่งชุด
        transition={{
          duration: 80,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Grid />
        <Grid />
      </motion.div>
    </div>
  );
};

export default AutoScrollingGallery;
