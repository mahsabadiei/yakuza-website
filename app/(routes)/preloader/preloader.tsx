"use client";
import dynamic from 'next/dynamic'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FramerMotionWrapper } from "@/app/shared/components/framer-motion-wrapper/framer-motion-wrapper";

const Home = dynamic(() => import('../home/home'))

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 8000);
  }, []);

  return isLoading ? (
    <FramerMotionWrapper>
      <section className="flex flex-col w-full min-h-screen justify-center items-center">
        <motion.div
          className="w-[36px] h-[36px] border-[5.5px] border-red rounded-full"
          initial={{ y: -100 }}
          variants={{
            start: {
              opacity: [0, 1],
              x: 0,
              y: 300,
              transition: { duration: 4, delay: 2 },
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
            className="min-w-[74px] min-h-[74px] border-[5.5px] border-red rounded-full"
            variants={{
              start: {
                x: 180,
                y: 0,
                transition: { duration: 2 },
              },
              end: {
                opacity: [1, 0],
                transition: { duration: 2, delay: 6 },
              },
            }}
            animate={["start", "end"]}
          />
          <motion.div
            className="min-w-[74px] min-h-[74px] border-[5.5px] border-red rounded-full"
            variants={{
              start: {
                x: 0,
                y: -40,
                transition: { duration: 2 },
              },
              end: {
                opacity: [1, 0],
                transition: { duration: 2, delay: 6 },
              },
            }}
            animate={["start", "end"]}
          />
          <motion.div
            className="min-w-[74px] min-h-[74px] border-[5.5px] border-red rounded-full"
            variants={{
              start: {
                x: -180,
                y: 0,
                transition: { duration: 2 },
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
          initial={{ y: 0 }}
          variants={{
            start: {
              opacity: [0, 1],
              x: 0,
              y: -300,
              transition: { duration: 4, delay: 2 },
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
      </section>
    </FramerMotionWrapper>
  ) : (
    <Home />
  );
}
