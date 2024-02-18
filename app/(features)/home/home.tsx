"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FramerMotionWrapper } from "@/app/components/framer-motion-wrapper/framer-motion-wrapper";
import { sunrise } from "@/app/styles/fonts";
import Header from "./header";
import Auth from "./auth";
import xIcon from "@/public/x-icon.svg";
import youtubeIcon from "@/public/youtube-icon.svg";
import coinmarketcapIcon from "@/public/coinmarketcap-icon.svg";
import coingeckoIcon from "@/public/coingecko-icon.svg";
import discordIcon from "@/public/discord-icon.svg";
import gitbookIcon from "@/public/gitbook-icon.svg";
import dextoolsIcon from "@/public/dextools-icon.svg";
import humanHeadGif from "@/public/human-head.gif";

export default function Home() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    //@ts-ignore
    videoEl?.current?.play().catch((error) => {
      // console.error("Error attempting to play video", error);
    });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <FramerMotionWrapper>
      <motion.section
        className="flex min-h-screen flex-col items-center px-4 sm:px-8 overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2, ease: "circOut" } }}
      >
        <Header />

        <Auth />

        <div className="flex flex-col md:flex-row w-full items-center justify-between pt-6 md:pt-[18vh]">
          <div className="flex flex-row md:flex-col items-center justify-center gap-6">
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={xIcon}
                alt="xIcon"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={youtubeIcon}
                alt="youtubeIcon"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={coinmarketcapIcon}
                alt="coinmarketcapIcon"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={coingeckoIcon}
                alt="coingeckoIcon"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={discordIcon}
                alt="discordIcon"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={gitbookIcon}
                alt="gitbookIcon"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={dextoolsIcon}
                alt="dextoolsIcon"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-col">
            <span className={sunrise.className}>
              <p className="text-base font-normal leading-5">W</p>
              <p className="text-base font-normal leading-5">h</p>
              <p className="text-base font-normal leading-5">i</p>
              <p className="text-base font-normal leading-5">t</p>
              <p className="text-base font-normal leading-5">e</p>
              <p className="text-base font-normal leading-5">p</p>
              <p className="text-base font-normal leading-5">a</p>
              <p className="text-base font-normal leading-5">p</p>
              <p className="text-base font-normal leading-5">e</p>
              <p className="text-base font-normal leading-5">r</p>
            </span>
          </div>

          <div className="absolute right-4 bottom-11 md:hidden">
            <span className={sunrise.className}>
              <p className="text-base font-normal leading-5">W</p>
              <p className="text-base font-normal leading-5">h</p>
              <p className="text-base font-normal leading-5">i</p>
              <p className="text-base font-normal leading-5">t</p>
              <p className="text-base font-normal leading-5">e</p>
              <p className="text-base font-normal leading-5">p</p>
              <p className="text-base font-normal leading-5">a</p>
              <p className="text-base font-normal leading-5">p</p>
              <p className="text-base font-normal leading-5">e</p>
              <p className="text-base font-normal leading-5">r</p>
            </span>
          </div>
        </div>

        <Image
          className="flex sm:hidden object-cover min-w-[100%] min-h-[628px] fixed right-0 bottom-0 -z-10"
          src={humanHeadGif}
          alt="humanHeadGif"
          priority
          // fill
          unoptimized
          quality={100}
          sizes="100vw"
        />

        <video
          className="hidden sm:flex object-cover min-w-[100%] min-h-[100%] lg:min-w-[80%] lg:max-h-[100%] xl:min-h-[100%] m-auto fixed bottom-0 -z-10"
          muted
          // autoPlay
          loop
          playsInline
          ref={videoEl}
        >
          <source src="./human-head.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.section>
    </FramerMotionWrapper>
  );
}
