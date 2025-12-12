import React, { useState, useRef, useMemo, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useThree, useFrame } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { Sky, Plane, Box } from '@react-three/drei';
import { ShapeContext } from '../utils/context';
import * as THREE from 'three';
// import {randomUUID} from 'crypto';
const getColliderType = (shape) => {
    switch(shape) {
        case 'box': return 'cuboid';
        case 'sphere': return 'ball';
        case 'cylinder': return 'hull';
        case 'torus': return 'hull';
        default: return 'hull';
    }
};
// make the objects shootable
export function Bullet({ startPos, direction, Component, shape }) {
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) return;

        
        ref.current.setLinvel(
            {
                x: direction.x * 12,  
                y: direction.y * 12,
                z: direction.z * 12
            },
            true
        );
    }, [ref.current]);

    return (
        <RigidBody 
            type='dynamic' 
            ccd={true}  
            restitution={0.1}   
            friction={0.7}      
            ref={ref}
            colliders={getColliderType(shape)}  
            mass={0.5}          
            linearDamping={0.2} 
            position={[startPos.x, startPos.y, startPos.z]}
        >
            <Component />
        </RigidBody>
    );
}

export const Gun = React.forwardRef(({ selectedShape, getBulletComponent }, ref) => {
    // const gunMesh = useRef();
    const [bullets, setBullets] = useState([]);
    const { camera } = useThree()

    
    const ShapeComponent = getBulletComponent(selectedShape);

    const shootBullet = React.useCallback(() => {
        if (!camera) return
        const CurrentShapeComponent = getBulletComponent(selectedShape);
        
        if (!CurrentShapeComponent) return;
        
        const camPos = camera.position.clone()

        
        const dir = new THREE.Vector3()
        camera.getWorldDirection(dir)
        dir.normalize()

        
        const spawnPos = camPos.clone().add(dir.clone().multiplyScalar(0.5))

        setBullets(prev => [
            ...prev,
            {
                id: Math.random(),
                startPos: spawnPos,
                direction: dir,
                Component: ShapeComponent 
            }
        ])
    }, [camera, selectedShape, ShapeComponent])
    React.useImperativeHandle(ref, () => ({
        shootBullet
    }));

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'W' || e.key === 'w' || e.key === 'ArrowUp') {
                shootBullet()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [shootBullet])

    return (
        <>
            {bullets.map(b => (
                <Bullet
                    key={b.id}
                    // selectedShape={selectedShape}
                    startPos={b.startPos}
                    direction={b.direction}
                    Component={b.Component}
                    shape={selectedShape}
                />
            ))}
        </>
    );
});
