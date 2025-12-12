import { Model } from './Room1_color'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import { OrbitControls, Stats, CameraControls } from '@react-three/drei'
import * as THREE from 'three'
import '../styles/loading.css'
import { Sidebar } from './sidebar'
import '../styles/animations.css'
import { Gun } from './shooting'
import { Physics, RigidBody } from '@react-three/rapier'
import { ShapeContext } from '../utils/context'
import { TorusMesh, BoxMesh, CylinderMesh, SphereMesh } from './sidebar'
import { Model_Cyberpunk } from '../variants/Cyberpunk'

const gravity = -9.81;

export function Loading() {
    return (
        <div className="loading-overlay">
            <div className="loader" id='loader'></div>
        </div>
    )
}

export function getVariantModel(variant) {
    switch (variant) {
        case 'cyberpunk':
            return Model_Cyberpunk;
        // Add more variants here as needed
        default:
            return Model;
    }
}


export function RageRoom() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [sidebar, setSidebar] = React.useState(false);
    const [stats, setStats] = React.useState(false);

    const { selectedShape, setSelectedShape } = React.useContext(ShapeContext);
    const gunRef = useRef();
    const canvasRef = useRef()

    //=========================
    // FIX: SHOOT BY ARROW UP
    //=========================


    // console.log(getBulletComponent())
    const getBulletComponent = (shape) => {
        switch (shape) {
            case "box": return BoxMesh;
            case "sphere": return SphereMesh;
            case "cylinder": return CylinderMesh;
            case "torus": return TorusMesh;
            default: return null
            // default: return BoxMesh;
        }
    };
    setInterval(function() {
        document.getElementById('rage-room-canvas').style.width = window.innerWidth + 'px'
        if (!isLoading) canvasRef.current.style.cursor = 'grab'
    },1000)

    return (
        <>
            {isLoading && <Loading />}

            <Canvas ref={canvasRef}
                id='rage-room-canvas'
                style={{
                    width: window.innerWidth,
                    height: "100vh",
                    animation: 'fadeIn 0.5s ease-in-out',
                }}
                shadows
                // camera={{
                //     near: 0.001,
                //     far: 2000,
                //     fov: 50,
                //     position: new THREE.Vector3(-5, 8, 5),
                // }}
                
                onCreated={() => {
                    setIsLoading(false);
                    setSidebar(true);
                    setStats(true);
                }}
            >
                <color attach="background" args={['#000000']} />
                <Physics gravity={[0, 0, 0]}>
                    <RigidBody type="fixed" colliders="trimesh">
                        {React.createElement(getVariantModel(''))} {/** Default */}
                    </RigidBody>
                </Physics>
                <Physics gravity={[0, gravity, 0]} timeStep={1/60} substeps={4}>
                   {selectedShape!=null && (<Gun ref={gunRef} selectedShape={selectedShape} getBulletComponent={getBulletComponent} />)}
                </Physics>
                <CameraControls />
                
            </Canvas>

            {stats && <Stats className="stats" />}
            {sidebar && <Sidebar style={{ animation: 'fadeIn 0.5s ease-in-out' }} />}
        </>
    );
}
