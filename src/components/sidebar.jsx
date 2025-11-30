
import '../styles/sidebar.css';
import '../styles/App.css';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import React, { useRef, useState, useMemo } from 'react'
import { OrbitControls, StatsGl, Html } from '@react-three/drei'


function BoxMesh({ color = 'orange', ...props }) {
    return (
        <mesh castShadow receiveShadow {...props}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} metalness={0.2} roughness={0.6} />
        </mesh>
    )
}
function SphereMesh({ color = 'lightblue', r = 0.6, ...props }) {
    return (
        <mesh castShadow receiveShadow {...props}>
            <sphereGeometry args={[r, 32, 32]} />
            <meshStandardMaterial color={color} metalness={0.3} roughness={0.6} />
        </mesh>
    )
}
function CylinderMesh({ color = 'gray', r1 = 0.5, r2 = 0.5, h = 1, ...props }) {
    return (
        <mesh castShadow receiveShadow {...props}>
            <cylinderGeometry args={[r1, r2, h]} />
            <meshStandardMaterial color={color} metalness={0.5} roughness={0.45} />
        </mesh>
    )
}
function TorusMesh({ color = 'pink', r = 0.5, rtube = 0.15, ...props }) {
    return (
        <mesh castShadow receiveShadow {...props}>
            <torusGeometry args={[r, rtube]} />
            <meshStandardMaterial color={color} metalness={0.45} roughness={0.35} />
        </mesh>
    )
}

// TODO: Sidebar component code goes here

export function Sidebar({ ...props }) {

    const [isChoosing, setIsChoosing] = useState(false);

    return (
        <div className="sidebar" {...props}>
            {/* This is where people can choose objects to add to the scene */}
            <h5 style={{ marginTop: '-5px' }}>Properties Sidebar</h5>
            {/** Make it draggable */}
            <div id='dragCanvas' style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <Canvas camera={{ position: [0, 0, 5] }} style={isChoosing? {border: '2px solid blue'} : {}} onClick={() => {setIsChoosing(false); setIsChoosing(true)}}> 
                    {/** DEBUG: But there is a catch here, if we click on this element 
                     * and click on the other element, all of them will be selected */}
                    <color attach="background" args={['#ffffff']} />
                    <ambientLight intensity={0.6} />
                    <BoxMesh />
                </Canvas>
                <Canvas camera={{ position: [0, 0, 5] }} style={isChoosing? {border: '2px solid blue'} : {}} onClick={() => {setIsChoosing(false); setIsChoosing(true)}}>
                    <color attach="background" args={['#ffffff']} />
                    <ambientLight intensity={0.6} />
                    <SphereMesh />
                </Canvas>
                <Canvas camera={{ position: [0, 0, 5] }} style={isChoosing? {border: '2px solid blue'} : {}} onClick={() => {setIsChoosing(false); setIsChoosing(true)}}>
                    <color attach="background" args={['#ffffff']} />
                    <ambientLight intensity={0.6} />
                    <CylinderMesh />
                </Canvas>
                <Canvas camera={{ position: [0, 0, 5] }} style={isChoosing? {border: '2px solid blue'} : {}} onClick={() => {setIsChoosing(false); setIsChoosing(true)}}>
                    <color attach="background" args={['#ffffff']} />
                    <ambientLight intensity={0.6} />
                    <TorusMesh />
                </Canvas>
            </div>
        </div>
    )
}