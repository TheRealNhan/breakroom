import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Bloom, EffectComposer, SelectiveBloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import { BlendFunction } from 'postprocessing'

export function Model_Cyberpunk(props) {
  const { nodes, materials } = useGLTF('/room2_color.glb')
  const bloomRef = useRef()
  return (
    <>
    <ambientLight intensity={0.5} />
    <directionalLight intensity={0.8} position={[5, 10, 7.5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-near={0.5} shadow-camera-far={500} shadow-camera-left={-50} shadow-camera-right={50} shadow-camera-top={50} shadow-camera-bottom={-50} />
    <group {...props} dispose={null}>
      <group position={[-2.9, 1.474, 2.993]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials['metal blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_3.geometry}
          material={materials['black.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_4.geometry}
          material={materials['window.002']}
        />
      </group>
      <group position={[3, 1.519, -3]} scale={[1, 1.161, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.walls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials['metal blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_5.geometry}
          material={materials['window.001']}
        />
      </group>
      <group position={[-2.992, 1.493, -3.06]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials['walls.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials['window.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_3.geometry}
          material={materials['window.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.metal}
        position={[-2.023, 0.974, -1.347]}
        scale={[0.204, 0.179, 0.677]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.006']}
        position={[2.462, 0.486, 3.195]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.walls}
        position={[2.887, 6.696, -3.33]}
        scale={0.603}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials['Material.019']}
          position={[1.402, -1.212, 0.42]}
          scale={1.109}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials['Material.017']}
          position={[-0.014, -0.665, 0.449]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.walls}
        position={[1.615, 6.696, -3.33]}
        scale={0.603}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials['Material.019']}
          position={[1.402, -1.212, 0.42]}
          scale={1.109}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials['Material.018']}
          position={[-0.014, -0.665, 0.449]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['metal 2']}
        position={[-3.289, 5.476, 1.112]}
        scale={[0.261, 0.261, 0.506]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials['Material.003']}
        position={[-2.068, 1.347, 2.616]}
        scale={0.052}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials['Material.003']}
        position={[3.802, 1.253, -3.461]}
        scale={0.052}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.heart}
        position={[0.139, 5.798, -0.584]}
        rotation={[0, 1.571, 0]}
        scale={0.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.005']}
        position={[2.315, 0.487, 3.419]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.black}
        position={[2.319, 5.569, 4.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.black}
        position={[2.319, 5.569, 3.684]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.black}
        position={[2.319, 5.569, 2.649]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.black}
        position={[2.319, 5.569, 2.039]}
      />
      <group position={[2.316, 3.947, 3.446]} scale={1.888}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials['metal 002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials.lamp}
        />
      </group>
      <group position={[-1.909, 3.919, 3.526]} rotation={[0, -1.571, 0]} scale={1.888}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials['metal 002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials.lamp}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.black}
        position={[-1.802, 3.933, 0.419]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials.black}
        position={[3.811, 5.753, -1.052]}
        rotation={[Math.PI / 2, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['concrete.001']}
        position={[0, 0.485, 0]}
        scale={4.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-0.357, 0.4, 0.073]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.concrete}
        position={[-0.357, 0.4, 0.073]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.004']}
        position={[-0.357, 0.4, 0.073]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials['Material.023']}
        position={[-2.023, 0.498, -1.279]}
        scale={0.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials.metal}
        position={[-3.075, 5.684, 1.163]}
        scale={[0.04, 0.04, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials['Material.026']}
        position={[0.883, 4.688, -1.309]}
        rotation={[Math.PI / 2, 1.143, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials['Material.026']}
        position={[0.836, 4.911, -1.3]}
        rotation={[Math.PI / 2, 1.404, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials['Material.026']}
        position={[0.761, 5.209, -1.286]}
        rotation={[-1.571, 1.449, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials['Material.026']}
        position={[0.841, 4.761, -1.297]}
        rotation={[1.673, 0.473, -0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials['black.001']}
        position={[-1.763, 5.164, 0.825]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials['dark gray']}
        position={[0.257, 4.649, -0.411]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1, 1, 0.557]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={nodes.Plane016.material}
        position={[0.689, 1.436, -2.092]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.577, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={nodes.Plane017.material}
        position={[0.651, 1.445, -2.283]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.563, 1, 1]}
      />
      <group position={[1.212, 2.68, -1.364]} scale={[0.634, 1, 0.237]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_1.geometry}
          material={materials['black.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_2.geometry}
          material={materials.tungsten}
        />
      </group>
      <group position={[2.919, 2.68, -1.364]} scale={[0.634, 1, 0.237]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_1.geometry}
          material={materials['black.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_2.geometry}
          material={materials.tungsten}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={materials['light pink']}
        position={[-1.853, 2.62, 3.585]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane024.geometry}
        material={nodes.Plane024.material}
        position={[0.713, 0.539, -0.402]}
        rotation={[0, -0.014, 0]}
        scale={0.314}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.heart}
        position={[0.19, 5.277, -0.389]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.692}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials['light blue']}
        position={[-1.705, 5.245, 3.251]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.624}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={nodes.Text002.material}
        position={[4, 2.179, -2.558]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.999}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert001.geometry}
        material={materials['Material.023']}
        position={[-3.964, 2.244, -0.661]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert002.geometry}
        material={materials['metal.001']}
        position={[0.81, 5.99, -2.439]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert003.geometry}
        material={materials['metal.001']}
        position={[-2.579, 5.1, 3.327]}
        rotation={[0, 1.571, 0]}
        scale={0.525}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert004.geometry}
        material={materials['metal.001']}
        position={[-2.579, 5.1, 3.012]}
        rotation={[0, 1.571, 0]}
        scale={0.525}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert005.geometry}
        material={materials['metal.001']}
        position={[-2.579, 5.1, 2.711]}
        rotation={[0, 1.571, 0]}
        scale={0.525}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert006.geometry}
        material={materials['Material.021']}
        position={[-2.018, 4.04, 3.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert007.geometry}
        material={materials['Material.021']}
        position={[-2.018, 4.04, 4.993]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert008.geometry}
        material={materials['Material.021']}
        position={[-4.9, 3.951, 3.926]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert009.geometry}
        material={nodes.Vert009.material}
        position={[0.251, 3.834, -1.241]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert010.geometry}
        material={materials['Material.007']}
        position={[0, 5.843, -3.974]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert011.geometry}
        material={materials.black}
        position={[-3.631, 5.402, 2.118]}
        rotation={[0, 0.356, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025.geometry}
          material={materials['Material.014']}
          position={[0.366, 0.026, 0.428]}
          scale={0.404}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert012.geometry}
        material={materials.black}
        position={[-3.325, 5.402, 3.618]}
        rotation={[-Math.PI, 0.723, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026.geometry}
          material={materials['dark red']}
          position={[0.366, 0.026, 0.428]}
          scale={0.404}
        />
      </mesh>
      <group position={[-0.619, 0.557, 2.395]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.618}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Car_Cube_1.geometry}
          material={materials.Body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Car_Cube_2.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Car_Cube_3.geometry}
          material={materials.Window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Car_Cube_4.geometry}
          material={materials.Bumpers}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Car_Cube_5.geometry}
          material={materials.Lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Car_Cube_6.geometry}
          material={materials.Bottom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Car_Cube_7.geometry}
          material={materials.Tires}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Car_Cube_8.geometry}
          material={materials.Wheels}
        />
      </group>
      <group position={[3.058, 1.111, -1.718]} scale={[0.491, 0.604, 0.409]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials['Material.009']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials['Material.011']}
        position={[2.288, 0.664, 3.812]}
        rotation={[0, -0.337, 0]}
        scale={0.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[2.437, 0.601, 3.151]}
        rotation={[0, -0.337, 0]}
        scale={[0.128, 0.133, 0.085]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials['Material.012']}
        position={[3.75, 0.679, 3.309]}
        rotation={[-1.861, -0.46, 0.979]}
        scale={[0.298, 0.406, 0.298]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={nodes.Cylinder010.material}
        position={[2.998, 0.826, 3.234]}
        scale={0.318}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials['Material.010']}
        position={[2.838, 1.053, -1.352]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={0.555}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={nodes.Plane022.material}
        position={[2.798, 0.618, 2.207]}
        rotation={[0, 1.099, 0]}
        scale={0.314}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={nodes.Plane023.material}
        position={[0.515, 0.618, -0.236]}
        rotation={[0, 0.421, 0]}
        scale={0.314}
      />
    </group>
    </>
  )
}

useGLTF.preload('/room2_color.glb')