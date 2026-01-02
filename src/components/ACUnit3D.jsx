import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text3D, Float, Sparkles, Environment } from '@react-three/drei'
import * as THREE from 'three'

function ACUnit({ position = [0, 0, 0] }) {
  const meshRef = useRef()
  const fanRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
    if (fanRef.current) {
      fanRef.current.rotation.z += 0.1
    }
  })

  return (
    <group position={position}>
      {/* Main AC Unit Body */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.2, 0.8]} />
        <meshStandardMaterial color="#e8e8e8" metalness={0.3} roughness={0.2} />
      </mesh>
      
      {/* Front Grille */}
      <mesh position={[0, 0, 0.41]}>
        <boxGeometry args={[1.8, 1, 0.02]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.1} />
      </mesh>
      
      {/* Fan */}
      <group ref={fanRef} position={[0, 0, 0.42]}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.02, 8]} />
          <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Fan Blades */}
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} rotation={[0, 0, (i * Math.PI) / 2]} position={[0.2, 0, 0]}>
            <boxGeometry args={[0.15, 0.02, 0.01]} />
            <meshStandardMaterial color="#444444" />
          </mesh>
        ))}
      </group>
      
      {/* Cool Air Effect */}
      <Sparkles 
        count={70} 
        scale={[6, 3, 2]} 
        size={3} 
        speed={0.8} 
        color="#3b82f6" 
        position={[0, -0.8, 0]}
      />
    </group>
  )
}

function RepairTools() {
  const toolsRef = useRef()
  
  useFrame((state) => {
    if (toolsRef.current) {
      toolsRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={toolsRef}>
      {/* Wrench */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[3, 1, 0]}>
          <boxGeometry args={[0.1, 0.8, 0.05]} />
          <meshStandardMaterial color="#92400e" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
      
      {/* Screwdriver */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[-3, 0.5, 1]}>
          <cylinderGeometry args={[0.02, 0.02, 0.6]} />
          <meshStandardMaterial color="#10b981" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
      
      {/* Thermometer */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[2, -1, -1]}>
          <cylinderGeometry args={[0.03, 0.03, 0.5]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.3} />
        </mesh>
      </Float>
    </group>
  )
}

export default function ACUnit3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [4, 1.5, 4], fov: 45 }}>
        <Environment preset="night" />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={2} />
        <pointLight position={[0, 10, 0]} color="#10b981" intensity={1.5} />
        
        <ACUnit position={[0, -0.2, 0]} />
        <RepairTools />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Canvas>
    </div>
  )
}
