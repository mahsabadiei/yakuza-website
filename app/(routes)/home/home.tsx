"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { motion, useIsPresent } from "framer-motion";
import { FramerMotionWrapper } from "@/app/shared/components/framer-motion-wrapper/framer-motion-wrapper";
import { baiJamjuree, sunrise } from "@/app/styles/fonts";
import logo from "@/public/yakuza-logo.svg";
import unmuteIcon from "@/public/unmute-icon.svg";
import muteIcon from "@/public/mute-icon.svg";
import xIcon from "@/public/x-icon.svg";
import youtubeIcon from "@/public/youtube-icon.svg";
import coinmarketcapIcon from "@/public/coinmarketcap-icon.svg";
import coingeckoIcon from "@/public/coingecko-icon.svg";
import discordIcon from "@/public/discord-icon.svg";
import gitbookIcon from "@/public/gitbook-icon.svg";
import dextoolsIcon from "@/public/dextools-icon.svg";

export default function Home() {
  const [mute, setMute] = useState(true);
  const [audio, setAudio] = useState(new Audio("./Yakuza.mp3"));
  const { data: session } = useSession();
  const isPresent = useIsPresent();

  return (
    <FramerMotionWrapper>
      <motion.section
        className="flex min-h-screen flex-col items-center px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7, ease: "circOut" } }}
        exit={{ opacity: 1, transition: { duration: 0.7, ease: "circIn" } }}
        style={{ opacity: isPresent ? 1 : 0 }}
      >
        <div className="flex flex-row w-full gap-2 justify-between items-center">
          <Image src={logo} alt="logo" />

          <span className={baiJamjuree.className}>
            <p className="text-[32px] sm:text-[54px] font-semibold text-center my-[40px]">
              ヤクザの遺産
            </p>
          </span>

          <button
            className="rounded-[48px] p-4 bg-gray-gradient-medium"
            onClick={() => {
              setMute(!mute);
              mute ? audio.play() : audio.pause();
            }}
          >
            <Image src={mute ? unmuteIcon : muteIcon} alt="unmuteIcon" />
          </button>
        </div>

        <div className="flex flex-row w-[358px] sm:w-[587px] gap-4 justify-between rounded-[48px] border border-gray-gradient-light mb-4 px-6 py-4">
          {!session && (
            <>
              <div className="flex flex-row items-center justify-center">
                <Image
                  src={xIcon}
                  alt="x logo"
                  priority
                  // className="invert dark:invert-0"
                />
                <p className="text-xs sm:text-base font-semibold leading-6 px-1">
                  Connect X
                </p>
              </div>

              <button
                onClick={() => signIn()}
                className="px-7 py-2 rounded-[32px] bg-white"
              >
                <p className="text-xs sm:text-sm font-bold leading-[22px] text-black">
                  Connect
                </p>
              </button>
            </>
          )}

          {session && (
            <>
              <div className="flex flex-row items-center justify-center">
                <Image src={xIcon} alt="x logo" priority />
                <p className="text-xs sm:text-base font-semibold leading-6 px-1">
                  {session.user?.name}
                </p>
              </div>

              <button
                onClick={() => signOut()}
                className="px-7 py-2 rounded-[32px] bg-white"
              >
                <p className="text-xs sm:text-sm font-bold leading-[22px] text-black">
                  Disconnect
                </p>
              </button>
            </>
          )}
        </div>

        <div className="flex flex-col sm:flex-row w-full gap-10 items-center justify-between">
          <div className="flex flex-row sm:flex-col gap-6 items-center justify-center px-2 py-[10px] sm:py-7 rounded-[32px]">
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={xIcon}
                alt="xIcon"
                //  className="invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={youtubeIcon}
                alt="youtubeIcon"
                // className="invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={coinmarketcapIcon}
                alt="coinmarketcapIcon"
                // className="invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={coingeckoIcon}
                alt="coingeckoIcon"
                // className="invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={discordIcon}
                alt="discordIcon"
                // className="invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={gitbookIcon}
                alt="gitbookIcon"
                // className="invert dark:invert-0"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={dextoolsIcon}
                alt="dextoolsIcon"
                // className="invert dark:invert-0"
              />
            </Link>
          </div>

          <div />

          <div className="absolute right-0 bottom-[200px] sm:bottom-[400px]">
            <span className={sunrise.className}>
              <p className="text-xl font-normal rotate-90">Whitepaper</p>
            </span>
          </div>
        </div>

        <video
          autoPlay
          loop
          muted
          className="object-cover min-w-[100%] min-h-[100%] fixed right-0 bottom-0 -z-10"
        >
          <source src="./human-head.mp4" />
        </video>

        {/* <audio autoPlay loop>
          <source src="./Yakuza.mp3" type="audio/mp3" />
        </audio> */}
      </motion.section>
    </FramerMotionWrapper>
  );
}
