import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingShape = ({ 
  position, 
  shape, 
  color = "#a0a0a0",
  speed = 1,
  distort = 0.3 
}: { 
  position: [number, number, number]; 
  shape: "sphere" | "box" | "torus" | "icosahedron";
  color?: string;
  speed?: number;
  distort?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const renderShape = () => {
    switch (shape) {
      case "sphere":
        return <Sphere args={[1, 32, 32]} ref={meshRef}>
          <MeshDistortMaterial color={color} distort={distort} speed={2} roughness={0.4} metalness={0.8} />
        </Sphere>;
      case "box":
        return <Box args={[1.5, 1.5, 1.5]} ref={meshRef}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.9} wireframe />
        </Box>;
      case "torus":
        return <Torus args={[1, 0.4, 16, 32]} ref={meshRef}>
          <meshStandardMaterial color={color} roughness={0.2} metalness={0.9} />
        </Torus>;
      case "icosahedron":
        return <Icosahedron args={[1, 0]} ref={meshRef}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} wireframe />
        </Icosahedron>;
      default:
        return null;
    }
  };

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5} floatingRange={[-0.2, 0.2]}>
      <group position={position} scale={0.6}>
        {renderShape()}
      </group>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        <pointLight position={[10, 5, 10]} intensity={0.3} color="#c0c0c0" />
        
        {/* Left side shapes */}
        <FloatingShape position={[-4, 2, -2]} shape="sphere" color="#808080" speed={0.8} distort={0.4} />
        <FloatingShape position={[-3.5, -1.5, -1]} shape="box" color="#606060" speed={1.2} />
        <FloatingShape position={[-5, 0, -3]} shape="icosahedron" color="#a0a0a0" speed={0.6} />
        
        {/* Right side shapes */}
        <FloatingShape position={[4, 1.5, -2]} shape="torus" color="#707070" speed={1} />
        <FloatingShape position={[3.5, -2, -1.5]} shape="icosahedron" color="#909090" speed={0.9} />
        <FloatingShape position={[5, 0.5, -3]} shape="sphere" color="#505050" speed={0.7} distort={0.5} />
        
        {/* Center background shapes */}
        <FloatingShape position={[0, 3, -4]} shape="box" color="#404040" speed={0.5} />
        <FloatingShape position={[0, -3, -4]} shape="torus" color="#606060" speed={0.4} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
