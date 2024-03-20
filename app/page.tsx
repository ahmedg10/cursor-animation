import Image from "next/image";
import Cursor from "@/app/components/Cursor";

export default function Home() {
  return (
    <main className="bg-[#343434] h-screen w-screen">
      <div className="flex flex-col h-full justify-center items-center overflow-hidden">
        <h1 className="font-causticsDemo font-semibold text-5xl text-white">
          The Products of a Kid From Africa
        </h1>
        <p className="text-white opacity-50 text-sm	pt-1">Ahmed Ghaddah</p>
        <Cursor />
      </div>
    </main>
  );
}
