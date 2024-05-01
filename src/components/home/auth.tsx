import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import xIcon from "../../../public/x-icon.svg";

export default function Auth() {
  const { data: session, status } = useSession();

  return (
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
            className="flex w-[110px] h-[33px] justify-center items-center px-4 py-2 rounded-3xl bg-white hover:bg-gray-light"
            onClick={() => signIn("twitter", { callbackUrl: "/user" })}
          >
            <p className="text-sm font-bold leading-4 text-black">
              {status === "loading" ? "loading" : "Connect"}
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
            className="flex w-[110px] h-[33px] justify-center items-center px-4 py-2 rounded-3xl bg-white hover:bg-gray-light"
            onClick={() => signOut({ redirect: false })}
          >
            <p className="text-sm font-bold leading-4 text-black">Disconnect</p>
          </button>
        </>
      )}
    </div>
  );
}
