"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import MuxVideo from "@mux/mux-video-react";
import { motion } from "framer-motion";
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
  const [audio, setAudio] = useState(new Audio("./Yakuza(Downtempo).mp3"));
  const { data: session } = useSession();

  return (
    <FramerMotionWrapper>
      <motion.section
        className="flex min-h-screen flex-col items-center px-4 sm:px-8 overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7, ease: "circOut" } }}
        exit={{ opacity: 1, transition: { duration: 0.7, ease: "circIn" } }}
      >
        <div className="flex flex-row w-full justify-between items-start gap-2 mt-9 sm:mt-14">
          <div className="flex flex-col items-center">
            <Image
              src={logo}
              alt="logo"
              className="w-[32px] h-[38.885px] sm:w-[40px] sm:h-[48.607px] mb-1"
            />
            <p className="hidden sm:inline text-2xl font-extralight">Y</p>
            <p className="hidden sm:inline text-2xl font-extralight">A</p>
            <p className="hidden sm:inline text-2xl font-extralight">K</p>
          </div>

          <div className="hidden sm:flex flex-col items-center gap-12 mt-[125px] sm:mt-0">
            <span className={baiJamjuree.className}>
              <p className="text-[54px] font-semibold text-center">ヤク</p>
            </span>
            <div className="flex flex-row w-[440px] h-[45px] items-center justify-between gap-4 pr-2.5 pl-[18px] py-2 rounded-[48px] border border-gray-gradient-0.2">
              {!session && (
                <>
                  <div className="flex flex-row items-center justify-center">
                    <Image
                      src={xIcon}
                      alt="xIcon"
                      priority
                      // className="invert dark:invert-0"
                      className="w-[15px] h-[15px]"
                    />
                    <p className="text-xs font-semibold leading-[18px] px-1">
                      Connect X
                    </p>
                  </div>

                  <button
                    onClick={() => signIn()}
                    className="flex w-[84px] h-[29px] justify-center items-center px-5 py-1.5 rounded-3xl bg-white hover:bg-gray-light"
                  >
                    <p className="text-xs font-bold leading-4 text-black">
                      Connect
                    </p>
                  </button>
                </>
              )}

              {session && (
                <>
                  <div className="flex flex-row items-center justify-center">
                    <Image
                      src={xIcon}
                      alt="xIcon"
                      priority
                      className="w-[15px] h-[15px]"
                    />
                    <p className="text-xs font-semibold leading-[18px] px-1">
                      {session.user?.name}
                    </p>
                  </div>

                  <button
                    onClick={() => signOut()}
                    className="flex w-[84px] h-[29px] justify-center items-center px-5 py-1.5 rounded-3xl bg-white hover:bg-gray-light"
                  >
                    <p className="text-xs font-bold leading-4 text-black">
                      Disconnect
                    </p>
                  </button>
                </>
              )}
            </div>
          </div>

          <button
            className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] p-[14px] sm:p-[18px] rounded-[48px] bg-gray-gradient-0.1 hover:border hover:border-gray-gradient-0.3"
            onClick={() => {
              setMute(!mute);
              mute ? audio.play() : audio.pause();
            }}
          >
            <Image src={mute ? unmuteIcon : muteIcon} alt="unmuteIcon" />
          </button>
        </div>

        <div className="flex sm:hidden flex-col items-center gap-4">
          <span className={baiJamjuree.className}>
            <p className="text-[32px] font-semibold text-center">ヤク</p>
          </span>
          <div className="flex flex-row w-[358px] h-[56px] items-center justify-between gap-4 pr-4 pl-6 py-4 rounded-[48px] border border-gray-gradient-0.2">
            {!session && (
              <>
                <div className="flex flex-row items-center justify-center">
                  <Image
                    src={xIcon}
                    alt="xIcon"
                    priority
                    // className="invert dark:invert-0"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-xs font-semibold leading-6 px-1">
                    Connect X
                  </p>
                </div>

                <button
                  onClick={() => signIn()}
                  className="flex w-[99px] h-[34px] justify-center items-center px-6 py-1.5 rounded-[32px] bg-white hover:bg-gray-light"
                >
                  <p className="text-xs font-bold leading-[22px] text-black">
                    Connect
                  </p>
                </button>
              </>
            )}

            {session && (
              <>
                <div className="flex flex-row items-center justify-center">
                  <Image
                    src={xIcon}
                    alt="xIcon"
                    priority
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-xs font-semibold leading-6 px-1">
                    {session.user?.name}
                  </p>
                </div>

                <button
                  onClick={() => signOut()}
                  className="flex w-[99px] h-[34px] justify-center items-center px-6 py-1.5 rounded-[32px] bg-white hover:bg-gray-light"
                >
                  <p className="text-xs font-bold leading-[22px] text-black">
                    Disconnect
                  </p>
                </button>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full items-center justify-between">
          <div className="flex flex-row sm:flex-col items-center justify-center gap-6 pt-[130px]">
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={xIcon}
                alt="xIcon"
                // className="invert dark:invert-0"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={youtubeIcon}
                alt="youtubeIcon"
                // className="invert dark:invert-0"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={coinmarketcapIcon}
                alt="coinmarketcapIcon"
                // className="invert dark:invert-0"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={coingeckoIcon}
                alt="coingeckoIcon"
                // className="invert dark:invert-0"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={discordIcon}
                alt="discordIcon"
                // className="invert dark:invert-0"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={gitbookIcon}
                alt="gitbookIcon"
                // className="invert dark:invert-0"
                className="opacity-70 hover:opacity-100"
              />
            </Link>
            <Link href={""} target="_blank" rel="noopener noreferrer">
              <Image
                src={dextoolsIcon}
                alt="dextoolsIcon"
                // className="invert dark:invert-0"
                className="opacity-70 hover:opacity-100"
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

        {/* <video
          autoPlay
          loop
          muted
          className="object-cover min-w-[100%] min-h-[100%] fixed right-0 bottom-0 -z-10"
        >
          <source src="./human-head.mp4" />
          Your browser does not support the video tag.
        </video> */}

        <MuxVideo
          className="object-cover min-w-[100%] min-h-[100%] fixed right-0 bottom-0 -z-10"
          playbackId="mXWKSxoPGHy402s01rzJkZIQbkzwSV1b3qLwwJlmRBsFQ"
          metadata={{
            video_id: "video-id-123456",
            video_title: "Super Interesting Video",
            viewer_user_id: "user-id-bc-789",
          }}
          streamType="on-demand"
          minResolution="1080p"
          autoPlay
          loop
          muted
        />
      </motion.section>
    </FramerMotionWrapper>
  );
}
