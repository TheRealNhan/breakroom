import React, { useState, useRef, useMemo, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useThree, useFrame } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { Sky, Plane, Box } from '@react-three/drei';
import * as THREE from 'three';
// import {randomUUID} from 'crypto';

// make the objects shootable
export function Bullet({ startPos, direction, Component }) {
    const ref = useRef();

    useEffect(() => {
        if (!ref.current) return;

        ref.current.setLinvel(
            {
                x: direction.x * 20,
                y: direction.y * 20,
                z: direction.z * 20
            },
            true
        );
    }, [ref.current]);

    return (
        <RigidBody type='dynamic' ccd={true}
            restitution={0.2}   // độ nảy
            friction={0.5}
            ref={ref}
            colliders="ball"
            mass={0.3}
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

    // Component tương ứng với shape hiện tại
    const ShapeComponent = getBulletComponent(selectedShape);

    function shootBullet() {
        if (!camera) return

        // vị trí camera
        const camPos = camera.position.clone()

        // hướng camera đang nhìn
        const dir = new THREE.Vector3()
        camera.getWorldDirection(dir)
        dir.normalize()

        // vị trí spawn trước camera 0.5 units
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
    }
    React.useImperativeHandle(ref, () => ({
        shootBullet
    }));

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'W' || e.key === 'ArrowUp') {
                shootBullet()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>
            {bullets.map(b => (
                <Bullet
                    key={b.id}
                    startPos={b.startPos}
                    direction={b.direction}
                    Component={b.Component}
                />
            ))}
        </>
    );
});
