"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import MuxVideo from "@mux/mux-video-react";
// import MuxAudio from "@mux/mux-audio-react";
import { motion } from "framer-motion";
import { FramerMotionWrapper } from "@/app/shared/components/framer-motion-wrapper/framer-motion-wrapper";
import { sunrise } from "@/app/styles/fonts";
import Header from "./header";
import xIcon from "@/public/x-icon.svg";
import youtubeIcon from "@/public/youtube-icon.svg";
import coinmarketcapIcon from "@/public/coinmarketcap-icon.svg";
import coingeckoIcon from "@/public/coingecko-icon.svg";
import discordIcon from "@/public/discord-icon.svg";
import gitbookIcon from "@/public/gitbook-icon.svg";
import dextoolsIcon from "@/public/dextools-icon.svg";
import { useThemeDetector } from "@/app/shared/hooks/useThemeDetector";

export default function Home() {
  const videoEl = useRef(null);
  const videoElLight = useRef(null);
  const isDarkTheme = useThemeDetector();

  const attemptPlay = () => {
    if (isDarkTheme) {
      //@ts-ignore
      videoEl?.current?.play().catch((error) => {
        // console.error("Error attempting to play dark theme video", error);
      });
    } else {
      //@ts-ignore
      videoElLight?.current?.play().catch((error) => {
        // console.error("Error attempting to play light theme video", error);
      });
    }
  };

  useEffect(() => {
    attemptPlay();
  }, [isDarkTheme]);

  return (
    <FramerMotionWrapper>
      <motion.section
        className="flex min-h-screen flex-col items-center px-4 sm:px-8 overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7, ease: "circOut" } }}
        exit={{ opacity: 1, transition: { duration: 0.7, ease: "circIn" } }}
      >
        <Header />

        <div className="flex flex-col sm:flex-row w-full items-center justify-between">
          <div className="flex flex-row sm:flex-col items-center justify-center gap-6 pt-[130px]">
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={xIcon}
                alt="xIcon"
                className="opacity-70 hover:opacity-100 invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={youtubeIcon}
                alt="youtubeIcon"
                className="opacity-70 hover:opacity-100 invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={coinmarketcapIcon}
                alt="coinmarketcapIcon"
                className="opacity-70 hover:opacity-100 invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={coingeckoIcon}
                alt="coingeckoIcon"
                className="opacity-70 hover:opacity-100 invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={discordIcon}
                alt="discordIcon"
                className="opacity-70 hover:opacity-100 invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={gitbookIcon}
                alt="gitbookIcon"
                className="opacity-70 hover:opacity-100 invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={dextoolsIcon}
                alt="dextoolsIcon"
                className="opacity-70 hover:opacity-100 invert dark:invert-0"
              />
            </Link>
          </div>
        </div>

        <div className="absolute right-4 bottom-11  sm:right-[32px] sm:bottom-[218px]">
          <span className={sunrise.className}>
            <p className="text-xl font-normal leading-5 sm:leading-6 ">W</p>
            <p className="text-xl font-normal leading-5 sm:leading-6 ">h</p>
            <p className="text-xl font-normal leading-5 sm:leading-6 ">i</p>
            <p className="text-xl font-normal leading-5 sm:leading-6 ">t</p>
            <p className="text-xl font-normal leading-5 sm:leading-6 ">e</p>
            <p className="text-xl font-normal leading-5 sm:leading-6 ">p</p>
            <p className="text-xl font-normal leading-5 sm:leading-6 ">a</p>
            <p className="text-xl font-normal leading-5 sm:leading-6 ">p</p>
            <p className="text-xl font-normal leading-5 sm:leading-6 ">e</p>
            <p className="text-xl font-normal leading-5 sm:leading-6 ">r</p>
          </span>
        </div>

        <MuxVideo
          className="hidden dark:flex object-cover min-w-[100%] min-h-[428px] sm:min-h-[100%] fixed right-0 bottom-0 -z-10"
          // playbackId="O00m6PEzRy7tWwc1xU2mSZH005dZTA8AgVGmp700WnBj02s"
          src="https://stream.mux.com/O00m6PEzRy7tWwc1xU2mSZH005dZTA8AgVGmp700WnBj02s/high.mp4"
          metadata={{
            video_id: "video-id",
            video_title: "Human Head dark mode",
            viewer_user_id: "user-id",
          }}
          streamType="on-demand"
          type="video/mp4"
          // autoPlay
          playsInline
          loop
          muted
          ref={videoEl}
        />

        <MuxVideo
          className="flex dark:hidden object-cover min-w-[100%] min-h-[428px] sm:min-h-[100%] fixed right-0 bottom-0 -z-10"
          // playbackId="qeQyJfIuCLS3CjUSCTLI012wxnLSsbb4YywUCisWaZb00"
          src="https://stream.mux.com/qeQyJfIuCLS3CjUSCTLI012wxnLSsbb4YywUCisWaZb00/high.mp4"
          metadata={{
            video_id: "video-id",
            video_title: "Human Head light mode",
            viewer_user_id: "user-id",
          }}
          streamType="on-demand"
          type="video/mp4"
          // autoPlay
          playsInline
          loop
          muted
          ref={videoElLight}
        />

        {/* <MuxAudio
          playbackId="opW9kK8zfWdV01YLCGrQoXzJyR029Eg2RLYOlZ6Tt1B300"
          metadata={{
            video_id: "audio-id",
            video_title: "Yakuza Audio",
            viewer_user_id: "user-id",
          }}
          streamType="on-demand"
          controls
          autoPlay
          className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] p-[14px] sm:p-[18px] rounded-[48px] bg-black-gradient-0.5 dark:bg-gray-gradient-0.1 hover:border hover:border-gray-gradient-0.3"
        /> */}
      </motion.section>
    </FramerMotionWrapper>
  );
}
