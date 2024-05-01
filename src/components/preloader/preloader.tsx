"use client";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Home = dynamic(() => import("../home/home"));

export default function Preloader() {
  const heightRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const firstLoad = sessionStorage.getItem("firstLoad");

  useEffect(() => {
    //@ts-ignore
    setHeight(heightRef?.current?.clientHeight);
    // const interval = setInterval(() => {
    //   setIsLoading(false);
    //   clearInterval(interval);
    // }, 8000);
  }, []);

  const onEnterClick = () => {
    setIsLoading(false);
    sessionStorage.setItem("firstLoad", "true");
  };

  return isLoading && !firstLoad ? (
    <AnimatePresence>
      <section
        className="flex flex-col w-full min-h-screen justify-center items-center overflow-hidden"
        ref={heightRef}
      >
        <motion.div
          className="w-[24px] h-[24px] border-[3.78px] border-red-brand rounded-full"
          initial={{ y: -100 }}
          variants={{
            start: {
              opacity: [0, 1],
              x: 0,
              y: height - (height / 2 + 108),
              transition: { duration: 4, delay: 1 },
            },
            // end: {
            //   opacity: [1, 0],
            //   transition: { duration: 2, delay: 6 },
            // },
          }}
          animate={["start", "end"]}
        />
        <section className="flex flex-row w-full min-h-screen gap-[128px] justify-center items-center">
          <motion.div
            className="min-w-[51px] min-h-[51px] border-[3.78px] border-red-brand rounded-full"
            variants={{
              start: {
                x: 165,
                y: 0,
                transition: { duration: 1.6 },
              },
              // end: {
              //   opacity: [1, 0],
              //   transition: { duration: 2, delay: 6 },
              // },
            }}
            animate={["start", "end"]}
          />
          <motion.div
            className="min-w-[51px] min-h-[51px] border-[3.78px] border-red-brand rounded-full"
            variants={{
              start: {
                x: 0,
                y: -22,
                transition: { duration: 1.6 },
              },
              // end: {
              //   opacity: [1, 0],
              //   transition: { duration: 2, delay: 6 },
              // },
            }}
            animate={["start", "end"]}
          />
          <motion.div
            className="min-w-[51px] min-h-[51px] border-[3.78px] border-red-brand rounded-full"
            variants={{
              start: {
                x: -165,
                y: 0,
                transition: { duration: 1.6 },
              },
              // end: {
              //   opacity: [1, 0],
              //   transition: { duration: 2, delay: 6 },
              // },
            }}
            animate={["start", "end"]}
          />
        </section>
        <motion.div
          className="flex flex-col items-center"
          initial={{ y: 100 }}
          variants={{
            start: {
              opacity: [0, 1],
              x: 0,
              y: -(height - (height / 2 + 108)),
              transition: { duration: 4, delay: 1 },
            },
            // end: {
            //   opacity: [1, 0],
            //   transition: { duration: 2, delay: 6 },
            // },
          }}
          animate={["start", "end"]}
        >
          <p className="text-2xl font-extralight">Y</p>
          <p className="text-2xl font-extralight">A</p>
          <p className="text-2xl font-extralight">K</p>
        </motion.div>
        <motion.button
          className="w-[263px] h-[64px] px-8 py-4 absolute m-auto rounded-[48px] bg-red-brand"
          onClick={onEnterClick}
          initial={{ y: 500 }}
          variants={{
            start: {
              opacity: [0, 1],
              x: 0,
              y: -(height - (height / 2 + 650)),
              transition: { duration: 4, delay: 4 },
            },
            // end: {
            //   opacity: [1, 0],
            //   transition: { duration: 2, delay: 6 },
            // },
          }}
          animate={["start", "end"]}
        >
          <p className="text-xl font-bold text-white">入力</p>
        </motion.button>
      </section>
    </AnimatePresence>
  ) : (
    <Home />
  );
}
