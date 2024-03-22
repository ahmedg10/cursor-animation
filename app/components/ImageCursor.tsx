"use client";
import { motion } from "framer-motion";
import { useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import africa from "../../public/IMG_5573.jpg";
import { useEffect } from "react";

export function ImageCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveMouse = (e: any) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 1.01;
    const targetY = clientY - (window.innerWidth / 2) * 0.6;
    x.set(targetX);
    y.set(targetY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <motion.div
      onMouseMove={moveMouse}
      className="h-[20vw] w-[15vw] flex overflow-hidden fixed items-center justify-center"
      style={{ x, y, transition: "all 0.3s ease-out" }}
    >
      <Image
        src={africa}
        alt="Hover Africa Image"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </motion.div>
  );
}
