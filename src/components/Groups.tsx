import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

import { Physics } from '@react-three/rapier'

const g = -0.98 // gravity constant

export function Model({ ...props }: any) {
  const { nodes }: any = useGLTF('/room (1).gltf')
  return (
    <>
      <group {...props} dispose={null}>
        <group scale={0.01}>
          <Physics gravity={[0, g, 0]}>
            <group
              position={[99.057, -133.513, -137.637]}
              rotation={[0, 1.484, 0]}
              scale={[0.146, 0.259, 0.108]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_4.geometry}
                material={nodes.Cube_4.material}
                position={[29.028, 31.661, 0.013]}
                rotation={[-Math.PI / 2, 0, 0.029]}
                scale={[1.199, 1.199, 0.842]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_3.geometry}
                material={nodes.Cube_3.material}
                position={[41.521, 31.276, -1.186]}
                rotation={[-Math.PI / 2, 0, 0.029]}
                scale={[1.199, 1.199, 0.842]}
              />
            </group>


            <group
              position={[137.263, -124.402, -83.678]}
              rotation={[0, 0, -Math.PI]}
              scale={[-0.188, 0.32, 0.188]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.triangular_ruler.geometry}
                material={nodes.triangular_ruler.material}
                position={[70.931, 31.186, -40.371]}
                rotation={[0, -0.76, 0]}
                scale={0.597}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_24.geometry}
                material={nodes.Rectangle_24.material}
                position={[-221.893, 25.819, 42.415]}
                rotation={[-Math.PI / 2, 0, -0.12]}
                scale={0.613}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_12.geometry}
                material={nodes.Rectangle_12.material}
                position={[-16.011, 9.612, 88.605]}
                rotation={[-Math.PI / 2, 0, -0.12]}
                scale={0.613}
              />
              <group
                position={[-221.893, 25.819, 42.415]}
                rotation={[-Math.PI / 2, 0, -0.12]}
                scale={0.613}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_3_instance_1.geometry}
                  material={nodes.mesh_3_instance_1.material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_3_instance_2.geometry}
                  material={nodes.mesh_3_instance_2.material}
                  position={[75.96, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_3_instance_3.geometry}
                  material={nodes.mesh_3_instance_3.material}
                  position={[151.92, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_3_instance_4.geometry}
                  material={nodes.mesh_3_instance_4.material}
                  position={[227.88, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_3_instance_5.geometry}
                  material={nodes.mesh_3_instance_5.material}
                  position={[303.84, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_3_instance_6.geometry}
                  material={nodes.mesh_3_instance_6.material}
                  position={[379.8, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_3_instance_7.geometry}
                  material={nodes.mesh_3_instance_7.material}
                  position={[455.76, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_3_instance_8.geometry}
                  material={nodes.mesh_3_instance_8.material}
                  position={[531.72, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_3_instance_9.geometry}
                  material={nodes.mesh_3_instance_9.material}
                  position={[607.68, 0, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_3_instance_10.geometry}
                  material={nodes.mesh_3_instance_10.material}
                  position={[683.64, 0, 0]}
                />
              </group>
            </group>
          </Physics>
          <Physics gravity={[0, g, 0]}>
            <group position={[125.728, -197.394, 134.231]} scale={[0.573, 0.44, 0.573]}>
              <group position={[1.361, 140.596, -2.814]} scale={0.68}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_5.geometry}
                  material={nodes.Cube_5.material}
                  position={[-11.804, -29.556, 4.971]}
                  rotation={[-Math.PI, 0, 2.705]}
                  scale={1.521}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_4_1.geometry}
                  material={nodes.Cube_4_1.material}
                  position={[10.3, 22.668, 1.82]}
                  rotation={[-0.052, 0.007, -0.125]}
                  scale={1.521}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_3_1.geometry}
                  material={nodes.Cube_3_1.material}
                  position={[13.847, 55.823, 0]}
                  rotation={[0, 0, 0.047]}
                  scale={1.521}
                />
              </group>

              <mesh
                castShadow
                receiveShadow
                geometry={nodes.vase.geometry}
                material={nodes.vase.material}
                position={[1.559, 19.527, -0.189]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.034}
              />

            </group>


            <group position={[90.318, -108.228, -13.955]} scale={[0.197, 0.126, 0.177]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.body.geometry}
                material={nodes.body.material}
                position={[0, -215.436, 0]}
                rotation={[0, 0.405, 0]}
                scale={2.021}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.tag.geometry}
                material={nodes.tag.material}
                position={[-0.423, -25.887, -0.223]}
                rotation={[0, 0.464, 0]}
                scale={[2.557, 2.208, 2.561]}
              />
              <group position={[0.066, 221.022, -1.075]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.topcap.geometry}
                  material={nodes.topcap.material}
                  position={[0.104, 9.308, -0.428]}
                  rotation={[-Math.PI, -0.471, 0]}
                  scale={[8.942, 1.215, 8.942]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.cap_1.geometry}
                  material={nodes.cap_1.material}
                  position={[0, -8.813, 0]}
                  rotation={[0, 0.464, 0]}
                  scale={[1.521, 0.171, 1.521]}
                />
              </group>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_13.geometry}
              material={nodes.Rectangle_13.material}
              position={[-119.044, 9.447, -172]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_9.geometry}
              material={nodes.Rectangle_9.material}
              position={[176, 2.534, 128.845]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <group position={[-159.063, -201.69, -71.357]} scale={[0.379, 0.423, 0.326]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.tap_l.geometry}
                material={nodes.tap_l.material}
                position={[-3.994, 115.585, 70.073]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
                scale={1.294}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.tap_r.geometry}
                material={nodes.tap_r.material}
                position={[-3.994, 115.657, -75.977]}
                rotation={[Math.PI / 2, 0, -Math.PI]}
                scale={1.286}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.minihandle.geometry}
                material={nodes.minihandle.material}
                position={[-12.723, 123.311, -16.52]}
                rotation={[-1.529, 0.544, -1.958]}
                scale={1.856}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.handle.geometry}
                material={nodes.handle.material}
                position={[-2.518, 114.708, -2.641]}
                rotation={[-Math.PI / 2, 0.533, Math.PI]}
                scale={1.255}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.contornbucket.geometry}
                material={nodes.contornbucket.material}
                position={[-0.848, 75.024, -2.542]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.909}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bucket.geometry}
                material={nodes.bucket.material}
                position={[-0.848, 75.024, -2.542]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.899}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_8.geometry}
              material={nodes.Cube_8.material}
              position={[-103.374, -56.411, -112.069]}
              rotation={[0, 1.45, -0.087]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_7.geometry}
              material={nodes.Cube_7.material}
              position={[-104.048, -113.848, -113.325]}
              rotation={[0, 1.45, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_10.geometry}
              material={nodes.Cube_10.material}
              position={[-103.115, -28.417, -124.987]}
              rotation={[-3.041, 0.12, 3.13]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_9.geometry}
              material={nodes.Cube_9.material}
              position={[-100.929, -127.389, -143.04]}
              rotation={[-1.398, -0.021, 3.023]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_6.geometry}
              material={nodes.Cube_6.material}
              position={[-79.821, -116.227, -120.945]}
              rotation={[-1.592, -0.173, 3.019]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_5_1.geometry}
              material={nodes.Cube_5_1.material}
              position={[-127.904, -117.702, -126.248]}
              rotation={[-1.55, 0.173, 3.019]}
            />
            <group
              position={[148.278, -136.532, -2.48]}
              rotation={[-Math.PI, -0.96, -Math.PI]}
              scale={[0.235, 0.226, 0.235]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.lightbulb.geometry}
                material={nodes.lightbulb.material}
                position={[0.167, 349.888, 121.513]}
                rotation={[Math.PI / 3, 0, 0]}
                scale={0.148}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.centralsupport.geometry}
                material={nodes.centralsupport.material}
                position={[0.167, 364.668, 110.754]}
                rotation={[1.012, 0, 0]}
                scale={[0.15, 1.199, 0.15]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.base.geometry}
                material={nodes.base.material}
                position={[0.45, 5.777, 9.011]}
                scale={0.474}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.lamp.geometry}
                material={nodes.lamp.material}
                position={[0.167, 357.161, 117.331]}
                rotation={[-Math.PI / 6, 0, 0]}
                scale={[0.629, 0.467, 0.629]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.tube.geometry}
                material={nodes.tube.material}
                position={[0.167, 66.034, -29.448]}
                scale={[0.326, 0.592, 0.326]}
              />
            </group>
            <group position={[17.258, -178.999, -64.786]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_7_1.geometry}
                material={nodes.Cube_7_1.material}
                position={[-12.851, -4.069, 11.271]}
                rotation={[-1.633, 0.063, -0.789]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_6_1.geometry}
                material={nodes.Cube_6_1.material}
                position={[11.948, -4.069, 10.659]}
                rotation={[-1.658, -0.087, 0.782]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_7_2.geometry}
                material={nodes.Cube_7_2.material}
                position={[11.335, -4.069, -12.626]}
                rotation={[-1.509, -0.062, -0.79]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_5_2.geometry}
                material={nodes.Cube_5_2.material}
                position={[-12.094, -4.069, -13.383]}
                rotation={[-1.509, 0.062, 0.783]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_4.geometry}
                material={nodes.Cylinder_4.material}
                position={[0, 28.261, 0]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </group>
            <group position={[17.258, -178.999, 16.742]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_7_3.geometry}
                material={nodes.Cube_7_3.material}
                position={[-12.851, -4.069, 11.271]}
                rotation={[-1.633, 0.063, -0.789]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_6_2.geometry}
                material={nodes.Cube_6_2.material}
                position={[11.948, -4.069, 10.659]}
                rotation={[-1.658, -0.087, 0.782]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_7_4.geometry}
                material={nodes.Cube_7_4.material}
                position={[11.335, -4.069, -12.626]}
                rotation={[-1.509, -0.062, -0.79]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_5_3.geometry}
                material={nodes.Cube_5_3.material}
                position={[-12.094, -4.069, -13.383]}
                rotation={[-1.509, 0.062, 0.783]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_4_1.geometry}
                material={nodes.Cylinder_4_1.material}
                position={[0, 28.261, 0]}
                rotation={[0, Math.PI / 2, 0]}
              />
            </group>
          </Physics>
          <PerspectiveCamera
            makeDefault={false}
            far={100000}
            near={70}
            fov={45}
            position={[59.06, 1668.511, 218.204]}
            rotation={[-1.599, 0.035, -0.901]}
          />
          <Physics gravity={[0, g, 0]}>
            <group
              position={[131.627, -107.558, -105.135]}
              rotation={[1.564, -1.519, -Math.PI]}
              scale={[0.261, 0.363, 0.281]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_3_2.geometry}
                material={nodes.Cube_3_2.material}
                position={[-5.526, 82.106, -2.246]}
                rotation={[0, 0.095, 0]}
                scale={[0.833, 1.677, 1.242]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_2.geometry}
                material={nodes.Cube_2.material}
                position={[-54.541, 73.075, -2.238]}
                scale={[1.399, 1.487, 1.246]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_4_2.geometry}
                material={nodes.Cube_4_2.material}
                position={[45.083, 77.648, -2.246]}
                rotation={[-0.028, 0.097, 0.264]}
                scale={[0.831, 1.488, 1.243]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_4_3.geometry}
                material={nodes.Cube_4_3.material}
                position={[32.609, 73.381, 10.898]}
                rotation={[-0.028, 0.097, 0.264]}
                scale={[0.831, 1.488, 1.243]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube_3_3.geometry}
                material={nodes.Cube_3_3.material}
                position={[-18.749, 81.099, 10.898]}
                rotation={[0, 0.095, 0]}
                scale={[0.833, 1.677, 1.242]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
                position={[-77.919, 72.182, 8.91]}
                scale={[1.399, 1.487, 1.246]}
              />
            </group>

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere.geometry}
              material={nodes.Sphere.material}
              position={[-0.554, -180.357, -135]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
            />
          </Physics>
          {/** No Physics here */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_8.geometry}
            material={nodes.Rectangle_8.material}
            position={[177, -1, 126.898]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          {/** No Physics here */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_11.geometry}
            material={nodes.Rectangle_11.material}
            position={[173.611, -0.524, -69.004]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.957, 0.855, 1]}
          />
          {/** No Physics here */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_10.geometry}
            material={nodes.Rectangle_10.material}
            position={[170.754, -14.524, -44.004]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.957, 0.855, 1]}
          />
          {/** No Physics here */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_7.geometry}
            material={nodes.Rectangle_7.material}
            position={[175, -12.5, -52.188]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[1.957, 0.855, 1]}
          />
          {/** No Physics here */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_6.geometry}
            material={nodes.Rectangle_6.material}
            position={[-120, 8, -177]}
          />
          {/** No Physics here */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_4_4.geometry}
            material={nodes.Cube_4_4.material}
            position={[27.09, 17.118, -176.549]}
          />
          <Physics gravity={[0, g, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_12_1.geometry}
              material={nodes.Rectangle_12_1.material}
              position={[31.83, 14, -206.923]}
            />
          </Physics>
          {/** No Physics here */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_5.geometry}
            material={nodes.Rectangle_5.material}
            position={[31.83, 14, -174.361]}
          />
          {/** No Physics here */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={nodes.Plane.material}
            position={[27.566, 14.714, -175.811]}
          />
          <Physics gravity={[0, g, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_3_4.geometry}
              material={nodes.Cube_3_4.material}
              position={[93.107, -165.886, -31.823]}
              rotation={[Math.PI, -1.101, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2_1.geometry}
              material={nodes.Cube_2_1.material}
              position={[105.876, -175.82, -117.138]}
              rotation={[0, -1.208, 0]}
            />
            <group
              position={[-59.814, -203.161, 4.18]}
              rotation={[3.141, 0, -Math.PI]}
              scale={[-0.436, 1.554, 0.436]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_2.geometry}
                material={nodes.Ellipse_2.material}
                position={[0, 2.712, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.398, 0.398, 0.609]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse.geometry}
                material={nodes.Ellipse.material}
                position={[0, -2.712, 0]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.398, 0.398, 0.609]}
              />
            </group>
            <group position={[108.325, -201.218, 72.837]} scale={[0.344, 0.399, 0.331]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_3.geometry}
                material={nodes.Cylinder_3.material}
                position={[29.751, 214.401, 9.976]}
                rotation={[0.096, -0.435, 0.041]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_2.geometry}
                material={nodes.Cylinder_2.material}
                position={[-2.931, 134.73, 3.721]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
                position={[-0.962, 55.486, -2.716]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_3_1.geometry}
              material={nodes.Cylinder_3_1.material}
              position={[159.517, -171.654, 1.286]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.014, 0.592, 1.014]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_2_1.geometry}
              material={nodes.Cylinder_2_1.material}
              position={[158.179, -171.654, -159.87]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.014, 0.592, 1.014]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_3_2.geometry}
              material={nodes.Cylinder_3_2.material}
              position={[72.658, -171.654, 1.286]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.014, 0.592, 1.014]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_1.geometry}
              material={nodes.Cylinder_1.material}
              position={[71.32, -171.654, -159.87]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[1.014, 0.592, 1.014]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_4.geometry}
              material={nodes.Rectangle_4.material}
              position={[117.227, -150.261, -79.5]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
            />
          </Physics>
          <directionalLight intensity={0.7} rotation={[1.474, 0.162, -1.555]} />
          <ambientLight intensity={0.5} />
          {/** No Physics here and under above */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_3.geometry}
            material={nodes.Rectangle_3.material}
            position={[0, -200, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={nodes.Rectangle_2.material}
            position={[200, -30, 0]}
            rotation={[Math.PI, -1.57, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle.geometry}
            material={nodes.Rectangle.material}
            position={[0, -30, -200]}
          />
          <PerspectiveCamera
            makeDefault={false}
            far={100000}
            near={70}
            fov={45}
            position={[-1509.613, 666.728, 330.151]}
            rotation={[-0.672, -0.954, -0.576]}
          />
        </group>
      </group >
    </>
  )
}

useGLTF.preload('/room (1).gltf')