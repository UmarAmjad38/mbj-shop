import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 100 }) {
  const mesh = useRef()
  const light = useRef()
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100
      const factor = Math.random() * 20 + 10
      const speed = Math.random() * 0.01 + 0.005
      const x = Math.random() * 40 - 20
      const y = Math.random() * 40 - 20
      const z = Math.random() * 40 - 20
      
      temp.push({ time, factor, speed, x, y, z })
    }
    return temp
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  useFrame(() => {
    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle
      const t = (particle.time += speed)
      
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      
      const s = Math.cos(t)
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="#3b82f6" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#10b981" transparent opacity={0.4} />
      </instancedMesh>
    </>
  )
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 20] }}>
        <color attach="background" args={['#0c111a']} />
        <fog attach="fog" args={['#0c111a', 50, 190]} />
        <pointLight position={[20, 30, 10]} intensity={3} color="#3b82f6" />
        <pointLight position={[-10, -20, -10]} color="#10b981" intensity={2} />
        <Particles count={250} />
      </Canvas>
    </div>
  )
}
