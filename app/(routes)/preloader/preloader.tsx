"use client";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Home from "../home/home";

const Torus = ({ position, args, color }: any) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta, frame) => {
    //@ts-ignore
    // ref.current.rotation.y += delta * 0.2;
    const speed = isHovered ? 4 : 0.2;
    //@ts-ignore
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh
      ref={ref as any}
      position={position}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
    >
      <torusGeometry args={args} />
      <meshStandardMaterial color={isHovered ? "white" : "red"} wireframe />
    </mesh>
  );
};

const Scene = () => {
  const directionalLightRef = useRef();

  return (
    <>
      <directionalLight
        position={[0, 1, 2]}
        intensity={0.5}
        //@ts-ignore
        ref={directionalLightRef}
        color={"white"}
      />
      <ambientLight intensity={0.5} />
      {/* <Torus args={[0.1, 1000, 50, 5]} position={[0, 0, 0]} color="red" /> */}
      <Torus args={[0.6, 0.1, 30, 30]} position={[-0.3, 0, 0]} color="red" />
      <Torus args={[0.6, 0.1, 30, 30]} position={[0.3, 0, 0]} color="red" />
      <Torus args={[0.6, 0.1, 30, 30]} position={[0, 0.7, 0]} color="red" />
      <Torus args={[0.1, 0.05, 30, 30]} position={[0, 1.5, 0]} color="red" />
    </>
  );
};

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 10000);
  }, []);

  return isLoading ? (
    <section className="w-full h-[900px]">
      <Canvas>
        <Scene />
      </Canvas>
    </section>
  ) : (
    <Home />
  );
}
