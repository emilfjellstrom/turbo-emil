import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AsciiRenderer } from "./AsciiRenderer";
import { useTheme } from "next-themes";

const Box = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh {...props} ref={ref}>
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export const Scene = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  
  return (
    <Canvas>
      <color attach="background" args={["black"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 2]} />
      <AsciiRenderer invert theme={theme}/>
    </Canvas>
  );
};
