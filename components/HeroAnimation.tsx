"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues and reduce initial bundle size
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function HeroAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/coding.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  if (!animationData) {
    return (
      <div className="w-full h-full min-h-75 flex items-center justify-center">
        <div className="w-full max-w-lg aspect-square bg-slate-100 dark:bg-slate-800/50 rounded-full animate-pulse opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        className="w-full max-w-lg h-auto"
      />
    </div>
  );
}
