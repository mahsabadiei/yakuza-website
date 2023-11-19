"use client";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { baiJamjuree, sunrise } from "@/app/styles/fonts";
import xIcon from "@/public/x-icon.svg";
import youtubeIcon from "@/public/youtube-icon.svg";
import coinmarketcapIcon from "@/public/coinmarketcap-icon.svg";
import coingeckoIcon from "@/public/coingecko-icon.svg";
import discordIcon from "@/public/discord-icon.svg";
import gitbookIcon from "@/public/gitbook-icon.svg";
import dextoolsIcon from "@/public/dextools-icon.svg";
import human from "@/public/human.svg";
import ellipse from "@/public/ellipse.svg";

export default function Home() {
  const { data: session } = useSession();
  return (
    <section className="flex min-h-screen flex-col items-center px-8">
      <span className={baiJamjuree.className}>
        <p className="text-[32px] sm:text-[54px] font-semibold text-center my-[40px]">
          ヤクザの遺産
        </p>
      </span>

      <div className="flex flex-row w-[358px] sm:w-[587px] gap-4 justify-between rounded-[48px] border border-black dark:border-gray-gradient-light mb-4 px-6 py-4">
        {!session && (
          <>
            <div className="flex flex-row items-center justify-center">
              <Image src={xIcon} alt="x logo" priority />
              <p className="text-xs sm:text-base font-semibold leading-6 px-1">
                Connect X
              </p>
            </div>

            <button
              onClick={() => signIn()}
              className="px-7 py-2 rounded-[32px] bg-black dark:bg-white"
            >
              <p className="text-xs sm:text-sm font-bold leading-[22px] text-white dark:text-black">
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
              className="px-7 py-2 rounded-[32px] bg-black dark:bg-white"
            >
              <p className="text-xs sm:text-sm font-bold leading-[22px] text-white dark:text-black">
                Disconnect
              </p>
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-10 items-center justify-between">
        <div className="flex flex-row sm:flex-col gap-6 items-center justify-center px-2 py-[10px] sm:py-7 rounded-[32px] bg-black">
          <Link
            href={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={xIcon} alt="xIcon" />
          </Link>
          <Link
            href={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={youtubeIcon} alt="youtubeIcon" />
          </Link>
          <Link
            href={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={coinmarketcapIcon} alt="coinmarketcapIcon" />
          </Link>
          <Link
            href={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={coingeckoIcon} alt="coingeckoIcon" />
          </Link>
          <Link
            href={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={discordIcon} alt="discordIcon" />
          </Link>
          <Link
            href={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={gitbookIcon} alt="gitbookIcon" />
          </Link>
          <Link
            href={""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={dextoolsIcon} alt="dextoolsIcon" />
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={human}
            alt="human"
            className="z-10 absolute bottom-0"
            priority
            quality={100}
            // fill
            sizes="100vw"
          />
          <Image
            src={ellipse}
            alt="ellipse"
            className="absolute bottom-0 -z-0"
            priority
            quality={100}
            // fill
            sizes="100vw"
          />
        </div>

        <div />

        <div className="absolute right-0 bottom-[200px] sm:bottom-[400px]">
          <span className={sunrise.className}>
            <p className="text-xl font-normal rotate-90">Whitepaper</p>
          </span>
        </div>
      </div>
    </section>
  );
}
