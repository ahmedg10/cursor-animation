"use client";
import Image from "next/image";
import Cursor from "@/app/components/Cursor";
import { useEffect, useState } from "react";
import africa from "../public/Vintage-Africa.jpg";
import Lenis from "@studio-freight/lenis";
import { ImageCursor } from "./components/ImageCursor";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="h-screen w-screen">
      <div className="h-full clip-path-1 select-none">
        <div className="flex justify-center items-center image-container select-none w-full h-full relative z-0">
          <Image
            src={africa}
            className="blur-[1px] select-none"
            alt="Ahmed Ghaddah"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="flex flex-col w-full h-1/2 justify-center items-center">
            <div
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className=" z-30 flex flex-col justify-center items-center h-[25vh] w-1/2"
            >
              <h1 className="z-30 font-causticsDemo font-semibold text-5xl text-black user select-none">
                The Products of a Kid From Africa
              </h1>
              <p className="text-gray-500 opacity-50 text-md pt-1 z-30 select-none">
                Ahmed Ghaddah
              </p>
            </div>
          </div>
          <Cursor isHovered={isHovered} />
        </div>
      </div>
      <div className="h-full"></div>
    </main>
  );
}
