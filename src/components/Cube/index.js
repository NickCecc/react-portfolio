import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Edges } from '@react-three/drei';

function Cube() {
    const meshRef = useRef();

    // Load images as textures for each face of the cube
    const textures = [
        useLoader(THREE.TextureLoader, '/HomeCube/C.png'),
        useLoader(THREE.TextureLoader, '/HomeCube/java2.png'),
        useLoader(THREE.TextureLoader, '/HomeCube/javascript.png'),
        useLoader(THREE.TextureLoader, '/HomeCube/python.png'),
        useLoader(THREE.TextureLoader, '/HomeCube/sql.png'),
        useLoader(THREE.TextureLoader, '/HomeCube/logo512.png'),
    ];

    // Animate rotation
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.x += 0.005;
        }
    });

    return (
        <mesh ref={meshRef} castShadow receiveShadow>
            <boxGeometry args={[2, 2, 2]} />

            {/* Apply individual materials with opacity and textures for each face */}
            {textures.map((texture, index) => (
                <meshStandardMaterial
                    attach={`material-${index}`}
                    key={index}
                    map={texture}
                    transparent={true}
                    opacity={0.8} // Adjust opacity for slight transparency
                />
            ))}

            {/* Edges for bold outlines */}
            <Edges color="black" />
        </mesh>
    );
}

export default Cube;
