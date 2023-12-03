"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
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
import humanHeadGif from "@/public/human-head.gif";


export default function Home() {
  const videoEl = useRef(null);
  const { data: session } = useSession();

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
        animate={{ opacity: 1, transition: { duration: 0.7, ease: "circOut" } }}
      >
        <Header />

        <div className="flex flex-row min-w-[358px] h-[56px] sm:w-[468px] sm:h-[53px] items-center justify-between gap-2 pr-4 pl-6 py-4 sm:pr-3 sm:pl-4 sm:py-3 rounded-[48px] border border-gray-gradient-0.2">
          {!session && (
            <>
              <div className="flex flex-row items-center justify-center">
                <Image
                  src={xIcon}
                  alt="xIcon"
                  priority
                  className="w-[20px] h-[20px]"
                />
                <p className="text-sm font-semibold leading-[18px] px-1">
                  Connect X
                </p>
              </div>

              <button
                className="fle w-[91px] h-[33px] justify-center items-center px-4 py-2 rounded-3xl bg-white hover:bg-gray-light"
                onClick={() => signIn()}
              >
                <p className="text-sm font-bold leading-4 text-black">
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
                <p className="text-sm font-semibold leading-[18px] px-1">
                  {session.user?.name}
                </p>
              </div>

              <button
                className="fle w-[91px] h-[33px] justify-center items-center px-4 py-2 rounded-3xl bg-white hover:bg-gray-light"
                onClick={() => signOut()}
              >
                <p className="text-sm font-bold leading-4 text-black">
                  Disconnect
                </p>
              </button>
            </>
          )}
        </div>

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

          <div className="absolute right-4 bottom-11 md:hidden">
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
        </div>

        <Image
          className="object-cover min-w-[100%] min-h-[628px] sm:min-h-[100%] fixed right-0 bottom-0 -z-10"
          src={humanHeadGif}
          alt="humanHeadGif"
          priority
          fill
        />

        {/* <video
          className="object-cover min-w-[100%] min-h-[628px] sm:min-h-[100%] fixed right-0 bottom-0 -z-10"
          muted
          autoPlay
          loop
          playsInline
          // ref={videoEl}
        >
          <source src="./human-head.gif"  />
          Your browser does not support the video tag.
        </video> */}
      </motion.section>
    </FramerMotionWrapper>
  );
}
