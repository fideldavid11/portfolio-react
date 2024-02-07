import { Html, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Model } from './computer/Computer';


function Renderizador() {
    const controlsRef = useRef();
  
    return (
      <div style={{ width: '100%', height: '80vh' }}>
        <Canvas camera={{ position: [0, 15, 100], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <Model /> {/* Usa el componente Renderizador3D */}
          <OrbitControls
            ref={controlsRef}
            enableRotate={true}
            enablePan={true}
            enableZoom={false}
            enableDamping={true}
            dampingFactor={0.1}
            minPolarAngle={Math.PI / 2} // Mantener el mismo ángulo vertical
            maxPolarAngle={Math.PI / 2} // Mantener el mismo ángulo vertical
            minAzimuthAngle={-Math.PI / 8}
            maxAzimuthAngle={Math.PI / 8}
            minDistance={10}
            maxDistance={100}
            rotateSpeed={0.5}
            panSpeed={0.5}
            args={[null, controlsRef.current]}
          />
          <Html>
            <div style={{ position: 'absolute', top: 10, left: 10, color: 'white' }}>
              {/* Agrega aquí cualquier contenido adicional que desees */}
            </div>
          </Html>
        </Canvas>
      </div>
    );
  }
  
  export default Renderizador;
