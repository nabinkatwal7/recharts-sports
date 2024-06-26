import Explorer from "@/components/home/Explorer";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Recharts X Sports
          </p>
        </div>
      </BackgroundGradientAnimation>
      <Explorer />
    </div>
  );
}
