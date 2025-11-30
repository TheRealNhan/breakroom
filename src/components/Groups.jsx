import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera, OrthographicCamera } from '@react-three/drei'
import useSpline from '@splinetool/r3f-spline'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
// import { LoadingRef } from './loading'

import { Physics } from '@react-three/rapier'
const g = -0.98 // gravity constant
// {/** No Physics here */} tag is added to indicate meshes that do not require physics or on the wall
export function Model({ ...props }) {
  // const { nodes } = useGLTF('/room (1).gltf')
  const { nodes, materials } = useSpline('./scene.splinecode')
  return (
    <>
      <color attach="background" args={['#000000']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <Physics gravity={[0, g, 0]}>
            <group name="Eraser" position={[99.06, -133.51, -137.64]} rotation={[0, 1.48, 0]} scale={[0.15, 0.26, 0.11]}>
              <mesh
                name="Cube 4"
                geometry={nodes['Cube 4'].geometry}
                material={materials['blue-dark']}
                castShadow
                receiveShadow
                position={[29.03, 31.66, 0.01]}
                rotation={[-Math.PI / 2, 0, 0.03]}
                scale={[1.2, 1.2, 0.84]}
              />
              <mesh
                name="Cube 3"
                geometry={nodes['Cube 3'].geometry}
                material={materials.blue}
                castShadow
                receiveShadow
                position={[41.52, 31.28, -1.19]}
                rotation={[-Math.PI / 2, 0, 0.03]}
                scale={[1.2, 1.2, 0.84]}
              />
            </group>
            <group
              name="Ruler"
              position={[137.26, -124.4, -83.68]}
              rotation={[0, 0, -Math.PI]}
              scale={[-0.19, 0.32, 0.19]}
            >
              <mesh
                name="triangular_ruler"
                geometry={nodes.triangular_ruler.geometry}
                material={materials.blue}
                castShadow
                receiveShadow
                position={[70.93, 31.19, -40.37]}
                rotation={[0, -0.76, 0]}
                scale={0.6}
              />
              <mesh
                name="Rectangle 24"
                geometry={nodes['Rectangle 24'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-221.89, 25.82, 42.42]}
                rotation={[-Math.PI / 2, 0, -0.12]}
                scale={0.61}
              />
              <mesh
                name="Rectangle 12"
                geometry={nodes['Rectangle 12'].geometry}
                material={materials['blue-light']}
                castShadow
                receiveShadow
                position={[-16.01, 9.61, 88.6]}
                rotation={[-Math.PI / 2, 0, -0.12]}
                scale={0.61}
              />
            </group>
            <group name="Flowers  vase" position={[125.73, -197.39, 134.23]} scale={[0.57, 0.44, 0.57]}>
              <group name="flower" position={[1.36, 140.6, -2.81]} scale={0.68}>
                <mesh
                  name="Cube 5"
                  geometry={nodes['Cube 5'].geometry}
                  material={materials.green}
                  castShadow
                  receiveShadow
                  position={[-11.8, -29.56, 4.97]}
                  rotation={[-Math.PI, 0, 2.71]}
                  scale={1.52}
                />
                <mesh
                  name="Cube 41"
                  geometry={nodes['Cube 41'].geometry}
                  material={materials.green}
                  castShadow
                  receiveShadow
                  position={[10.3, 22.67, 1.82]}
                  rotation={[-0.05, 0.01, -0.13]}
                  scale={1.52}
                />
                <mesh
                  name="Cube 31"
                  geometry={nodes['Cube 31'].geometry}
                  material={materials.red}
                  castShadow
                  receiveShadow
                  position={[13.85, 55.82, 0]}
                  rotation={[0, 0, 0.05]}
                  scale={1.52}
                />
              </group>
              <mesh
                name="vase"
                geometry={nodes.vase.geometry}
                material={materials.blue}
                castShadow
                receiveShadow
                position={[1.56, 19.53, -0.19]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.03}
              />
            </group>
            <group name="waterbottle" position={[90.32, -108.23, -13.95]} scale={[0.2, 0.13, 0.18]}>
              <mesh
                name="body"
                geometry={nodes.body.geometry}
                material={materials.body}
                castShadow
                receiveShadow
                position={[0, -215.44, 0]}
                rotation={[0, 0.4, 0]}
                scale={2.02}
              />
              <mesh
                name="tag"
                geometry={nodes.tag.geometry}
                material={materials.tag}
                castShadow
                receiveShadow
                position={[-0.42, -25.89, -0.22]}
                rotation={[0, 0.46, 0]}
                scale={[2.56, 2.21, 2.56]}
              />
              <group name="cap" position={[0.07, 221.02, -1.08]}>
                <mesh
                  name="topcap"
                  geometry={nodes.topcap.geometry}
                  material={materials.cap}
                  castShadow
                  receiveShadow
                  position={[0.1, 9.31, -0.43]}
                  rotation={[-Math.PI, -0.47, 0]}
                  scale={[8.94, 1.22, 8.94]}
                />
                <mesh
                  name="cap1"
                  geometry={nodes.cap1.geometry}
                  material={materials.cap}
                  castShadow
                  receiveShadow
                  position={[0, -8.81, 0]}
                  rotation={[0, 0.46, 0]}
                  scale={[1.52, 0.17, 1.52]}
                />
              </group>
            </group>
          </Physics>
          {/** No Physics here */}
          <mesh
            name="Rectangle 13"
            geometry={nodes['Rectangle 13'].geometry}
            material={materials['Rectangle 13 Material']}
            castShadow
            receiveShadow
            position={[-119.04, 9.45, -172]}
          />
          {/** No Physics here */}
          <mesh
            name="Rectangle 9"
            geometry={nodes['Rectangle 9'].geometry}
            material={materials['Rectangle 9 Material']}
            castShadow
            receiveShadow
            position={[176, 2.53, 128.85]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <Physics gravity={[0, g, 0]}>
            <group name="Bucket" position={[-159.06, -201.69, -71.36]} scale={[0.38, 0.42, 0.33]}>
              <mesh
                name="tap_l"
                geometry={nodes.tap_l.geometry}
                material={materials.metal}
                castShadow
                receiveShadow
                position={[-3.99, 115.58, 70.07]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
                scale={1.29}
              />
              <mesh
                name="tap_r"
                geometry={nodes.tap_r.geometry}
                material={materials.metal}
                castShadow
                receiveShadow
                position={[-3.99, 115.66, -75.98]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
                scale={1.29}
              />
              <mesh
                name="minihandle"
                geometry={nodes.minihandle.geometry}
                material={materials.metal}
                castShadow
                receiveShadow
                position={[-12.72, 123.31, -16.52]}
                rotation={[-1.53, 0.54, -1.96]}
                scale={1.86}
              />
              <mesh
                name="handle"
                geometry={nodes.handle.geometry}
                material={materials['metal 2']}
                castShadow
                receiveShadow
                position={[-2.52, 114.71, -2.64]}
                rotation={[-Math.PI / 2, 0.53, Math.PI]}
                scale={1.26}
              />
              <mesh
                name="contornbucket"
                geometry={nodes.contornbucket.geometry}
                material={materials.metal}
                castShadow
                receiveShadow
                position={[-0.85, 75.02, -2.54]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.91}
              />
              <mesh
                name="bucket"
                geometry={nodes.bucket.geometry}
                material={materials.parts}
                castShadow
                receiveShadow
                position={[-0.85, 75.02, -2.54]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.9}
              />
            </group>
            <mesh
              name="Cube 8"
              geometry={nodes['Cube 8'].geometry}
              material={materials['Cube 8 Material']}
              castShadow
              receiveShadow
              position={[-103.37, -56.41, -112.07]}
              rotation={[0, 1.45, -0.09]}
              scale={1}
            />
            <mesh
              name="Cube 7"
              geometry={nodes['Cube 7'].geometry}
              material={materials['Cube 7 Material']}
              castShadow
              receiveShadow
              position={[-104.05, -113.85, -113.32]}
              rotation={[0, 1.45, 0]}
              scale={1}
            />
            <mesh
              name="Cube 10"
              geometry={nodes['Cube 10'].geometry}
              material={materials['Cube 10 Material']}
              castShadow
              receiveShadow
              position={[-103.12, -28.42, -124.99]}
              rotation={[-3.04, 0.12, 3.13]}
              scale={1}
            />
            <mesh
              name="Cube 9"
              geometry={nodes['Cube 9'].geometry}
              material={materials['Cube 9 Material']}
              castShadow
              receiveShadow
              position={[-100.93, -127.39, -143.04]}
              rotation={[-1.4, -0.02, 3.02]}
              scale={1}
            />
            <mesh
              name="Cube 6"
              geometry={nodes['Cube 6'].geometry}
              material={materials['Cube 6 Material']}
              castShadow
              receiveShadow
              position={[-79.82, -116.23, -120.95]}
              rotation={[-1.59, -0.17, 3.02]}
              scale={1}
            />
            <mesh
              name="Cube 51"
              geometry={nodes['Cube 51'].geometry}
              material={materials['Cube 51 Material']}
              castShadow
              receiveShadow
              position={[-127.9, -117.7, -126.25]}
              rotation={[-1.55, 0.17, 3.02]}
              scale={1}
            />
            <group
              name="Design Lamp"
              position={[148.28, -136.53, -2.48]}
              rotation={[-Math.PI, -0.96, -Math.PI]}
              scale={0.23}
            >
              <mesh
                name="lightbulb"
                geometry={nodes.lightbulb.geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[0.17, 349.89, 121.51]}
                rotation={[Math.PI / 3, 0, 0]}
                scale={0.15}
              />
              <mesh
                name="centralsupport"
                geometry={nodes.centralsupport.geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[0.17, 364.67, 110.75]}
                rotation={[1.01, 0, 0]}
                scale={[0.15, 1.2, 0.15]}
              />
              <mesh
                name="base"
                geometry={nodes.base.geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[0.45, 5.78, 9.01]}
                scale={0.47}
              />
              <mesh
                name="lamp"
                geometry={nodes.lamp.geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[0.17, 357.16, 117.33]}
                rotation={[-Math.PI / 6, 0, 0]}
                scale={[0.63, 0.47, 0.63]}
              />
              <mesh
                name="tube"
                geometry={nodes.tube.geometry}
                material={materials.brown}
                castShadow
                receiveShadow
                position={[0.17, 66.03, -29.45]}
                scale={[0.33, 0.59, 0.33]}
              />
            </group>
            <group name="Chair 2" position={[17.26, -179, -64.79]}>
              <mesh
                name="Cube 71"
                geometry={nodes['Cube 71'].geometry}
                material={materials['Cube 71 Material']}
                castShadow
                receiveShadow
                position={[-12.85, -4.07, 11.27]}
                rotation={[-1.63, 0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cube 61"
                geometry={nodes['Cube 61'].geometry}
                material={materials['Cube 61 Material']}
                castShadow
                receiveShadow
                position={[11.95, -4.07, 10.66]}
                rotation={[-1.66, -0.09, 0.78]}
                scale={1}
              />
              <mesh
                name="Cube 72"
                geometry={nodes['Cube 72'].geometry}
                material={materials['Cube 72 Material']}
                castShadow
                receiveShadow
                position={[11.33, -4.07, -12.63]}
                rotation={[-1.51, -0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cube 52"
                geometry={nodes['Cube 52'].geometry}
                material={materials['Cube 52 Material']}
                castShadow
                receiveShadow
                position={[-12.09, -4.07, -13.38]}
                rotation={[-1.51, 0.06, 0.78]}
                scale={1}
              />
              <mesh
                name="Cylinder 4"
                geometry={nodes['Cylinder 4'].geometry}
                material={materials['Cylinder 4 Material']}
                castShadow
                receiveShadow
                position={[0, 28.26, 0]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </group>
            <group name="Chair" position={[17.26, -179, 16.74]}>
              <mesh
                name="Cube 73"
                geometry={nodes['Cube 73'].geometry}
                material={materials['Cube 73 Material']}
                castShadow
                receiveShadow
                position={[-12.85, -4.07, 11.27]}
                rotation={[-1.63, 0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cube 62"
                geometry={nodes['Cube 62'].geometry}
                material={materials['Cube 62 Material']}
                castShadow
                receiveShadow
                position={[11.95, -4.07, 10.66]}
                rotation={[-1.66, -0.09, 0.78]}
                scale={1}
              />
              <mesh
                name="Cube 74"
                geometry={nodes['Cube 74'].geometry}
                material={materials['Cube 74 Material']}
                castShadow
                receiveShadow
                position={[11.33, -4.07, -12.63]}
                rotation={[-1.51, -0.06, -0.79]}
                scale={1}
              />
              <mesh
                name="Cube 53"
                geometry={nodes['Cube 53'].geometry}
                material={materials['Cube 53 Material']}
                castShadow
                receiveShadow
                position={[-12.09, -4.07, -13.38]}
                rotation={[-1.51, 0.06, 0.78]}
                scale={1}
              />
              <mesh
                name="Cylinder 41"
                geometry={nodes['Cylinder 41'].geometry}
                material={materials['Cylinder 41 Material']}
                castShadow
                receiveShadow
                position={[0, 28.26, 0]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </group>
            {/* <PerspectiveCamera
            name="Camera"
            makeDefault={true}
            far={100000}
            near={70}
            fov={45}
            position={[-1239.96, 994.63, 1212.59]}
            rotation={[-46.38, -42.07, -35.11]}
            scale={1}
          /> */}
            <group
              name="Books"
              position={[131.63, -107.56, -105.13]}
              rotation={[1.56, -1.52, -Math.PI]}
              scale={[0.26, 0.36, 0.28]}
            >
              <mesh
                name="Cube 32"
                geometry={nodes['Cube 32'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-5.53, 82.11, -2.25]}
                rotation={[0, 0.1, 0]}
                scale={[0.83, 1.68, 1.24]}
              />
              <mesh
                name="Cube 2"
                geometry={nodes['Cube 2'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[-54.54, 73.07, -2.24]}
                scale={[1.4, 1.49, 1.25]}
              />
              <mesh
                name="Cube 42"
                geometry={nodes['Cube 42'].geometry}
                material={materials.white}
                castShadow
                receiveShadow
                position={[45.08, 77.65, -2.25]}
                rotation={[-0.03, 0.1, 0.26]}
                scale={[0.83, 1.49, 1.24]}
              />
              <mesh
                name="Cube 43"
                geometry={nodes['Cube 43'].geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[32.61, 73.38, 10.9]}
                rotation={[-0.03, 0.1, 0.26]}
                scale={[0.83, 1.49, 1.24]}
              />
              <mesh
                name="Cube 33"
                geometry={nodes['Cube 33'].geometry}
                material={materials.green}
                castShadow
                receiveShadow
                position={[-18.75, 81.1, 10.9]}
                rotation={[0, 0.1, 0]}
                scale={[0.83, 1.68, 1.24]}
              />
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials.pink}
                castShadow
                receiveShadow
                position={[-77.92, 72.18, 8.91]}
                scale={[1.4, 1.49, 1.25]}
              />
            </group>
            <mesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={materials['Sphere Material']}
              castShadow
              receiveShadow
              position={[-0.55, -180.36, -135]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
            />
          </Physics>
          {/** No Physics here */}
          <mesh
            name="Rectangle 8"
            geometry={nodes['Rectangle 8'].geometry}
            material={materials['Rectangle 8 Material']}
            castShadow
            receiveShadow
            position={[177, -1, 126.9]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          {/** No Physics here */}
          <mesh
            name="Rectangle 11"
            geometry={nodes['Rectangle 11'].geometry}
            material={materials['Rectangle 11 Material']}
            castShadow
            receiveShadow
            position={[173.61, -0.52, -69]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.96, 0.85, 1]}
          />
          {/** No Physics here */}
          <mesh
            name="Rectangle 10"
            geometry={nodes['Rectangle 10'].geometry}
            material={materials['Rectangle 10 Material']}
            castShadow
            receiveShadow
            position={[170.75, -14.52, -44]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.96, 0.85, 1]}
          />
          {/** No Physics here */}
          <mesh
            name="Rectangle 7"
            geometry={nodes['Rectangle 7'].geometry}
            material={materials['Rectangle 7 Material']}
            castShadow
            receiveShadow
            position={[175, -12.5, -52.19]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.96, 0.85, 1]}
          />
          {/** No Physics here */}
          <mesh
            name="Rectangle 6"
            geometry={nodes['Rectangle 6'].geometry}
            material={materials['Rectangle 6 Material']}
            castShadow
            receiveShadow
            position={[-120, 8, -177]}
          />
          {/** No Physics here */}
          <mesh
            name="Cube 44"
            geometry={nodes['Cube 44'].geometry}
            material={materials['Cube 44 Material']}
            castShadow
            receiveShadow
            position={[27.09, 17.12, -176.55]}
          />
          <Physics gravity={[0, g, 0]}>
            <mesh
              name="Rectangle 121"
              geometry={nodes['Rectangle 121'].geometry}
              material={materials['']}
              castShadow
              receiveShadow
              position={[31.83, 14, -206.92]}
            />
          </Physics>
          {/** No Physics here */}
          <mesh
            name="Rectangle 5"
            geometry={nodes['Rectangle 5'].geometry}
            material={materials['']}
            castShadow
            receiveShadow
            position={[31.83, 14, -174.36]}
          />
          {/** No Physics here */}
          <mesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={materials['Plane Material']}
            castShadow
            receiveShadow
            position={[27.57, 14.71, -175.81]}
          />
          <Physics gravity={[0, g, 0]}>
            <mesh
              name="Cube 34"
              geometry={nodes['Cube 34'].geometry}
              material={materials['Cube 34 Material']}
              castShadow
              receiveShadow
              position={[93.11, -165.89, -31.82]}
              rotation={[Math.PI, -1.1, Math.PI]}
            />
            <mesh
              name="Cube 21"
              geometry={nodes['Cube 21'].geometry}
              material={materials['Cube 21 Material']}
              castShadow
              receiveShadow
              position={[105.88, -175.82, -117.14]}
              rotation={[0, -1.21, 0]}
            />
            <group
              name="Carpet"
              position={[-59.81, -203.16, 4.18]}
              rotation={[3.14, 0, -Math.PI]}
              scale={[-0.44, 1.55, 0.44]}
            >
              <mesh
                name="Ellipse 2"
                geometry={nodes['Ellipse 2'].geometry}
                material={materials['yellow-dark']}
                castShadow
                receiveShadow
                position={[0, 2.71, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.4, 0.4, 0.61]}
              />
              <mesh
                name="Ellipse"
                geometry={nodes.Ellipse.geometry}
                material={materials.yellow}
                castShadow
                receiveShadow
                position={[0, -2.71, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.4, 0.4, 0.61]}
              />
            </group>
            <group name="Plant" position={[108.33, -201.22, 72.84]} rotation={[0, 0, 0]} scale={[0.34, 0.4, 0.33]}>
              <mesh
                name="Cylinder 3"
                geometry={nodes['Cylinder 3'].geometry}
                material={materials['green-2']}
                castShadow
                receiveShadow
                position={[29.75, 214.4, 9.98]}
                rotation={[0.1, -0.43, 0.04]}
                scale={1}
              />
              <mesh
                name="Cylinder 2"
                geometry={nodes['Cylinder 2'].geometry}
                material={materials['green-1']}
                castShadow
                receiveShadow
                position={[-2.93, 134.73, 3.72]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                name="Cylinder"
                geometry={nodes.Cylinder.geometry}
                material={materials.blue}
                castShadow
                receiveShadow
                position={[-0.96, 55.49, -2.72]}
                rotation={[0, 0, 0]}
                scale={1}
              />
            </group>
            <mesh
              name="Cylinder 31"
              geometry={nodes['Cylinder 31'].geometry}
              material={materials['Cylinder 31 Material']}
              castShadow
              receiveShadow
              position={[159.52, -171.65, 1.29]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.01, 0.59, 1.01]}
            />
            <mesh
              name="Cylinder 21"
              geometry={nodes['Cylinder 21'].geometry}
              material={materials['Cylinder 21 Material']}
              castShadow
              receiveShadow
              position={[158.18, -171.65, -159.87]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.01, 0.59, 1.01]}
            />
            <mesh
              name="Cylinder 32"
              geometry={nodes['Cylinder 32'].geometry}
              material={materials['Cylinder 32 Material']}
              castShadow
              receiveShadow
              position={[72.66, -171.65, 1.29]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.01, 0.59, 1.01]}
            />
            <mesh
              name="Cylinder1"
              geometry={nodes.Cylinder1.geometry}
              material={materials['Cylinder1 Material']}
              castShadow
              receiveShadow
              position={[71.32, -171.65, -159.87]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.01, 0.59, 1.01]}
            />
            <mesh
              name="Rectangle 4"
              geometry={nodes['Rectangle 4'].geometry}
              material={materials['Rectangle 4 Material']}
              castShadow
              receiveShadow
              position={[117.23, -150.26, -79.5]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
            />
          </Physics>
          {/** No Physics here */}
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[-579.38, 993.1, 95.37]}
          />
          {/** No Physics here */}
          <mesh
            name="Rectangle 3"
            geometry={nodes['Rectangle 3'].geometry}
            material={materials.Walls}
            castShadow
            receiveShadow
            position={[0, -200, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          {/** No Physics here */}
          <mesh
            name="Rectangle 2"
            geometry={nodes['Rectangle 2'].geometry}
            material={materials.Walls}
            castShadow
            receiveShadow
            position={[200, -30, 0]}
            rotation={[Math.PI, -1.57, Math.PI]}
            scale={1}
          />
          {/** No Physics here */}
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials.Walls}
            castShadow
            receiveShadow
            position={[0, -30, -200]}
          />
          {/* <OrthographicCamera name="1" makeDefault={false} far={10000} near={-50000} /> */}
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}

// useGLTF.preload('/room (1).gltf')