"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { baiJamjuree } from "@/app/styles/fonts";
import logo from "@/public/yakuza-logo.svg";
import unmuteIcon from "@/public/unmute-icon.svg";
import muteIcon from "@/public/mute-icon.svg";

export default function Header() {
  const audioRef = useRef(null);
  const [mute, setMute] = useState(false);

  return (
    <section className="flex flex-row w-full justify-between items-start gap-2 mt-8 sm:mt-14 mb-[57px] sm:mb-6">
      <div className="flex flex-col items-center">
        <Image src={logo} alt="logo" className="mb-1" />
        <p className="hidden sm:inline text-xs font-extralight">Y</p>
        <p className="hidden sm:inline text-xs font-extralight">A</p>
        <p className="hidden sm:inline text-xs font-extralight">K</p>
      </div>

      <span className={baiJamjuree.className}>
        <p className="text-[32px] sm:text-[54px] font-bold text-center">ヤク</p>
      </span>

      <button
        className="w-[48px] h-[48px] p-[14px] rounded-[48px] bg-gray-gradient-0.1 hover:border hover:border-gray-gradient-0.3"
        onClick={() => {
          setMute((v) => !v);
          //@ts-ignore
          mute ? audioRef?.current?.play() : audioRef?.current?.pause();
        }}
      >
        <audio
          src={"./Yakuza(Downtempo).mp3"}
          id="audio"
          ref={audioRef}
          autoPlay
          loop
        />
        <Image src={mute ? unmuteIcon : muteIcon} alt="unmuteIcon" priority />
      </button>
    </section>
  );
}
