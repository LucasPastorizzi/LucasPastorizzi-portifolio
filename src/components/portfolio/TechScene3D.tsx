import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, Octahedron, Dodecahedron } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RotatingGem = ({ 
  position, 
  scale = 1,
  speed = 1 
}: { 
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 * speed;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={1}>
      <Icosahedron args={[1, 0]} position={position} scale={scale} ref={meshRef}>
        <meshStandardMaterial 
          color="#808080" 
          roughness={0.2} 
          metalness={0.9}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
};

const TechScene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-5, 5, 5]} intensity={0.3} color="#c0c0c0" />
        
        <RotatingGem position={[-6, 2, -2]} scale={0.8} speed={0.7} />
        <RotatingGem position={[6, -2, -3]} scale={1} speed={0.5} />
        <RotatingGem position={[-5, -3, -2]} scale={0.6} speed={0.9} />
        <RotatingGem position={[5, 3, -2]} scale={0.7} speed={0.6} />
      </Canvas>
    </div>
  );
};

export default TechScene3D;
