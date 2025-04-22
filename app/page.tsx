'use client';

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Chatbox } from "@/components/Chatbox";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function Home() {
  const globeEl = useRef<any>(null);

  useEffect(() => {
    const controls = globeEl.current?.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3;
    }
  }, []);

  return (
    <div className="relative flex flex-col w-screen h-screen overflow-hidden bg-[#0a0a23]">
      <Header />

      <div className="absolute inset-0 z-0">
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor="rgba(0,0,0,0)"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Plan Your Adventure with AI
        </h1>
        <div className="w-full max-w-xs md:max-w-md mt-6">
          <Chatbox />
        </div>
      </div>

      <Footer />
    </div>
  );
}
