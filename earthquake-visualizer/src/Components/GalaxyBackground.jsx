// src/components/GalaxyBackground.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Stars() {
  const starsRef = useRef();

  // create 3000 stars
  const starGeometry = new THREE.BufferGeometry();
  const starCount = 3000;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 2000;
  }
  starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1.2,
    transparent: true,
    opacity: 0.8,
  });

  useFrame(() => {
    starsRef.current.rotation.y += 0.0005; // slow rotation
    starsRef.current.rotation.x += 0.0002;
  });

  return <points ref={starsRef} geometry={starGeometry} material={starMaterial} />;
}

function Nebula() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.0003;
  });

  return (
    <mesh ref={mesh} scale={40}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial
        color={"#3b82f6"}
        transparent
        opacity={0.08}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

export default function GalaxyBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.2} />
        <Stars />
        <Nebula />
      </Canvas>
    </div>
  );
}
