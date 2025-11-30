import { Model } from './Groups'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { Stats } from '@react-three/drei'
import '../styles/loading.css'
import {Sidebar} from './sidebar'
// import { Loading, LoadingRef } from './loading'
var loadingRef
export function Loading() {
    loadingRef = useRef(null)
    return (
        <div className="loading-overlay">
            <div className="loader" id='loader' ref={loadingRef}></div>
        </div>
    )
}

export function RageRoom() {
    const [isLoading, setIsLoading] = React.useState(true)
    const [sidebar, setSidebar] = React.useState(false)
    const [stats, setStats] = React.useState(false)

    setInterval(() => {
        document.getElementById('rage-room-canvas').style.width = window.innerWidth + 'px'
    },1000) // update canvas width every second

    return (
        <>
            {isLoading && <Loading />}
            <Canvas id='rage-room-canvas' style={{ width: window.innerWidth, height: '100vh' }}
                shadows camera={{ near: 0.1, far: 2000, fov: 50, position: new THREE.Vector3(-604.67, 485.11, 727.04), rotation: [-46.38, -42.07, -35.11] }}
                onCreated={() => {setIsLoading(false);setSidebar(true);setStats(true);}}>
                <color attach="background" args={['#000000']} />
                <Model />
                <OrbitControls minDistance={0.2} maxDistance={1000} enableZoom={true} />
            </Canvas>
            {stats && <Stats className='stats'/>}
            {sidebar && <Sidebar />}
        </>
    )
}