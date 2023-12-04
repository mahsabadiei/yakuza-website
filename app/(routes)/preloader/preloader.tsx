"use client";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FramerMotionWrapper } from "@/app/shared/components/framer-motion-wrapper/framer-motion-wrapper";

const Home = dynamic(() => import("../home/home"));

export default function Preloader() {
  const heightRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //@ts-ignore
    setHeight(heightRef?.current?.clientHeight);
    // const interval = setInterval(() => {
    //   setIsLoading(false);
    //   clearInterval(interval);
    // }, 8000);
  }, []);

  return isLoading ? (
    <FramerMotionWrapper>
      <section
        className="flex flex-col w-full min-h-screen justify-center items-center overflow-hidden"
        ref={heightRef}
      >
        <motion.div
          className="w-[24px] h-[24px] border-[3.78px] border-red rounded-full"
          initial={{ y: -100 }}
          variants={{
            start: {
              opacity: [0, 1],
              x: 0,
              y: height - (height / 2 + 108),
              transition: { duration: 4, delay: 1 },
            },
            end: {
              opacity: [1, 0],
              transition: { duration: 2, delay: 6 },
            },
          }}
          animate={["start", "end"]}
        />
        <section className="flex flex-row w-full min-h-screen gap-[128px] justify-center items-center">
          <motion.div
            className="min-w-[51px] min-h-[51px] border-[3.78px] border-red rounded-full"
            variants={{
              start: {
                x: 165,
                y: 0,
                transition: { duration: 1.6 },
              },
              end: {
                opacity: [1, 0],
                transition: { duration: 2, delay: 6 },
              },
            }}
            animate={["start", "end"]}
          />
          <motion.div
            className="min-w-[51px] min-h-[51px] border-[3.78px] border-red rounded-full"
            variants={{
              start: {
                x: 0,
                y: -22,
                transition: { duration: 1.6 },
              },
              end: {
                opacity: [1, 0],
                transition: { duration: 2, delay: 6 },
              },
            }}
            animate={["start", "end"]}
          />
          <motion.div
            className="min-w-[51px] min-h-[51px] border-[3.78px] border-red rounded-full"
            variants={{
              start: {
                x: -165,
                y: 0,
                transition: { duration: 1.6 },
              },
              end: {
                opacity: [1, 0],
                transition: { duration: 2, delay: 6 },
              },
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
            end: {
              opacity: [1, 0],
              transition: { duration: 2, delay: 6 },
            },
          }}
          animate={["start", "end"]}
        >
          <p className="text-2xl font-extralight">Y</p>
          <p className="text-2xl font-extralight">A</p>
          <p className="text-2xl font-extralight">K</p>
        </motion.div>
        <motion.button
          className="w-[247px] px-8 py-4 absolute m-auto rounded-[48px] bg-red"
          onClick={() => setIsLoading(false)}
          initial={{ scaleY: 0 }}
          animate={{
            scaleY: 1,
            transition: { duration: 1, delay: 7 },
          }}
        >
          <p className="text-xl font-bold text-white">Enter Yak universe</p>
        </motion.button>
      </section>
    </FramerMotionWrapper>
  ) : (
    <Home />
  );
}
