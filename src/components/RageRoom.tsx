import { Model } from './Groups'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'

export function RageRoom({...props}) {
    return (
        <Canvas style={{ width: window.innerWidth, height: window.innerHeight }} {...props}
            shadows camera={{near:0.01,far:100,fov:75,}}>
            <color attach="background" args={['#000000']} />
            <Model />
            <OrbitControls minDistance={0.05} maxDistance={99} />
        </Canvas>
    )
}