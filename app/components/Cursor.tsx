"use client";
import React, { use, useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

interface CursorProps {
  isHovered: boolean; // Specify the type for isHovered
}

export default function Cursor({ isHovered }: CursorProps) {
  const size = isHovered ? 300 : 30;

  let value = 10;
  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  value = lerp(value, 0, 0.1);
  const circle = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });

  const delayedMouse = useRef({ x: 0, y: 0 });

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.current = { x: clientX, y: clientY };
    moveCircle(mouse.current.x, mouse.current.y);
  };

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animation = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animation);
  };

  useEffect(() => {
    animation();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div
      ref={circle}
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        overflow: "hidden",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="rounded-full bg-orange-500 mix-blend-difference"
        style={{
          width: size,
          height: size,
          transition: "all 0.2s ease-out",
        }}
      />
    </div>
  );
}
