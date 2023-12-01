"use client";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { baiJamjuree } from "@/app/styles/fonts";
import logo from "@/public/yakuza-logo.svg";
import unmuteIcon from "@/public/unmute-icon.svg";
import muteIcon from "@/public/mute-icon.svg";
import xIcon from "@/public/x-icon.svg";

export default function Header() {
  const [mute, setMute] = useState(true);
  const [audio, setAudio] = useState(new Audio("./Yakuza(Downtempo).mp3"));
  const { data: session } = useSession();

  return (
    <>
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
          <div className="flex flex-row w-[440px] h-[45px] items-center justify-between gap-4 pr-2.5 pl-[18px] py-2 rounded-[48px] border border-black-gradient-0.3 dark:border-gray-gradient-0.2">
            {!session && (
              <>
                <div className="flex flex-row items-center justify-center">
                  <Image
                    src={xIcon}
                    alt="xIcon"
                    priority
                    className="w-[15px] h-[15px] invert dark:invert-0"
                  />
                  <p className="text-xs font-semibold leading-[18px] px-1">
                    Connect X
                  </p>
                </div>

                <button
                  className="flex w-[84px] h-[29px] justify-center items-center px-5 py-1.5 rounded-3xl bg-black dark:bg-white hover:bg-gray-light"
                  onClick={() => signIn()}
                >
                  <p className="text-xs font-bold leading-4 text-white dark:text-black">
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
                    className="w-[15px] h-[15px] invert dark:invert-0"
                  />
                  <p className="text-xs font-semibold leading-[18px] px-1">
                    {session.user?.name}
                  </p>
                </div>

                <button
                  className="flex w-[84px] h-[29px] justify-center items-center px-5 py-1.5 rounded-3xl bg-black dark:bg-white hover:bg-gray-light"
                  onClick={() => signOut()}
                >
                  <p className="text-xs font-bold leading-4 text-white dark:text-black">
                    Disconnect
                  </p>
                </button>
              </>
            )}
          </div>
        </div>

        <button
          className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] p-[14px] sm:p-[18px] rounded-[48px] bg-black-gradient-0.5 dark:bg-gray-gradient-0.1 hover:border hover:border-gray-gradient-0.3"
          onClick={() => {
            setMute(!mute);
            mute ? audio.play() : audio.pause();
          }}
        >
          <Image
            src={mute ? unmuteIcon : muteIcon}
            alt="unmuteIcon"
            className="invert dark:invert-0"
          />
        </button>
      </div>

      <div className="flex sm:hidden flex-col items-center gap-4">
        <span className={baiJamjuree.className}>
          <p className="text-[32px] font-semibold text-center">ヤク</p>
        </span>
        <div className="flex flex-row w-[358px] h-[56px] items-center justify-between gap-4 pr-4 pl-6 py-4 rounded-[48px] border border-black-gradient-0.3 dark:border-gray-gradient-0.2">
          {!session && (
            <>
              <div className="flex flex-row items-center justify-center">
                <Image
                  src={xIcon}
                  alt="xIcon"
                  priority
                  className="w-[20px] h-[20px] invert dark:invert-0"
                />
                <p className="text-xs font-semibold leading-6 px-1">
                  Connect X
                </p>
              </div>

              <button
                className="flex w-[99px] h-[34px] justify-center items-center px-6 py-1.5 rounded-[32px] bg-black dark:bg-white hover:bg-gray-light"
                onClick={() => signIn()}
              >
                <p className="text-xs font-bold leading-[22px] text-white dark:text-black">
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
                  className="w-[20px] h-[20px] invert dark:invert-0"
                />
                <p className="text-xs font-semibold leading-6 px-1">
                  {session.user?.name}
                </p>
              </div>

              <button
                className="flex w-[99px] h-[34px] justify-center items-center px-6 py-1.5 rounded-[32px] bg-black dark:bg-white hover:bg-gray-light"
                onClick={() => signOut()}
              >
                <p className="text-xs font-bold leading-[22px] text-white dark:text-black">
                  Disconnect
                </p>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
