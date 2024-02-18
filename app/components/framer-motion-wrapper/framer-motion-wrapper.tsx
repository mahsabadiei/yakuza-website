"use client";

import { motion, AnimatePresence } from "framer-motion";

export const FramerMotionWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <>
    <AnimatePresence>{children}</AnimatePresence>
  </>
);
