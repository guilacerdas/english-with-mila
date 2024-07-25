"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import Content from "../components/content";
import About from "../components/about";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="flex flex-col w-full text-black">
        <Navbar />
        <Content />
        <About />
      </div>
    </main>
  );
}
