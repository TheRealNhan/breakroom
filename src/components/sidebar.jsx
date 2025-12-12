
import '../styles/sidebar.css';
import '../styles/App.css';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import React, { useRef, useState, useMemo } from 'react'
import { OrbitControls, StatsGl, Html } from '@react-three/drei'
import '../styles/animations.css';
import { setDebugMode, debug } from '../utils/debug.jsx';
import { ShapeContext } from '../utils/context.jsx';

setDebugMode(false); // Disable debug mode by default
export function BoxMesh({ color = 'orange', collider = 'cuboid', ...props }) {
    return (
        <mesh castShadow receiveShadow {...props}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} metalness={0.2} roughness={0.6} />
        </mesh>
    )
}
export function SphereMesh({ color = 'lightblue', collider = 'ball', r = 0.6, ...props }) {
    return (
        <mesh castShadow receiveShadow {...props}>
            <sphereGeometry args={[r, 32, 32]} />
            <meshStandardMaterial color={color} metalness={0.3} roughness={0.6} />
        </mesh>
    )
}
export function CylinderMesh({ color = 'gray', r1 = 0.5, r2 = 0.5, h = 1, collider = 'hull', ...props }) {
    return (
        <mesh castShadow receiveShadow {...props}>
            <cylinderGeometry args={[r1, r2, h]} />
            <meshStandardMaterial color={color} metalness={0.5} roughness={0.45} />
        </mesh>
    )
}
export function TorusMesh({ color = 'pink', r = 0.5, rtube = 0.15, collider = 'hull', ...props }) {
    return (
        <mesh castShadow receiveShadow {...props}>
            <torusGeometry args={[r, rtube, 16, 64]} />
            <meshStandardMaterial color={color} metalness={0.45} roughness={0.35} />
        </mesh>
    )
}

export function Sidebar({ ...props }) {
    const { selectedShape, setSelectedShape } = React.useContext(ShapeContext);

    const handleShapeSelect = (shapeName) => {
        setSelectedShape(selectedShape === shapeName ? null : shapeName);
    };

    return (
        <div className="sidebar" {...props}>
            {/* This is where people can choose objects to add to the scene */}
            <h5 style={{ marginTop: '-5px' }}>Properties Sidebar</h5>
            <div id='variants-div' className='variants-div'>
                <details className='variants-details' open>
                    <summary>Variants</summary>
                    <div id='variants' className='variants'>
                        <div id='variant-1'>Default</div>
                        <div id='variant-2'>Cyberpunk</div>
                    </div>
                </details>
            </div>
            <div id='bullet-canvas' className='bullet-canvas' >
                <details className='bullet-details' open>
                    <summary>Bullet</summary>
                    <div id='dragCanvas' style={{ display: 'grid', gap: 8, marginBottom: 12, cursor: 'grab', gridTemplateColumns: 'repeat(2,120px)', alignItems: 'center', justifyContent: 'center' }}>

                        <Canvas camera={{ position: [0, 0, 5] }} style={selectedShape === 'box' ? { border: '1px solid blue', width: '120px', height: '120px' } : { width: '120px', height: '120px' }} onClick={(e) => { e.stopPropagation(); handleShapeSelect('box'); }}>
                            {/** DEBUG: But there is a catch here, if we click on this element 
                     * and click on the other element, all of them will be selected */}
                            <color attach="background" args={['#ffffff']} />
                            <ambientLight intensity={0.6} /> <BoxMesh />
                        </Canvas>
                        <Canvas camera={{ position: [0, 0, 5] }} style={selectedShape === 'sphere' ? { border: '1px solid blue', width: '120px', height: '120px' } : { width: '120px', height: '120px' }} onClick={(e) => { e.stopPropagation(); handleShapeSelect('sphere'); }}>
                            <color attach="background" args={['#ffffff']} />
                            <ambientLight intensity={0.6} />
                            <SphereMesh />
                        </Canvas>
                        <Canvas camera={{ position: [0, 0, 5] }} style={selectedShape === 'cylinder' ? { border: '1px solid blue', width: '120px', height: '120px' } : { width: '120px', height: '120px' }} onClick={(e) => { e.stopPropagation(); handleShapeSelect('cylinder'); }}>
                            <color attach="background" args={['#ffffff']} />
                            <ambientLight intensity={0.6} />
                            <CylinderMesh />
                        </Canvas>
                        <Canvas camera={{ position: [0, 0, 5] }} style={selectedShape === 'torus' ? { border: '1px solid blue', width: '120px', height: '120px' } : { width: '120px', height: '120px' }} onClick={(e) => { e.stopPropagation(); handleShapeSelect('torus'); }}>
                            <color attach="background" args={['#ffffff']} />
                            <ambientLight intensity={0.6} />
                            <TorusMesh />
                        </Canvas>
                    </div>
                </details>
            </div>
            {debug.current && (<p> Selected Shape: {selectedShape ? selectedShape : 'None'} </p>)}
        </div>
    )
}