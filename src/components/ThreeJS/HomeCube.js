import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function MyThree() {
    const refContainer = useRef(null);

    useEffect(() => {
        // === THREE.JS CODE START ===
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Create a WebGLRenderer with alpha: true to enable transparency
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Append the renderer to the ref container instead of document.body
        if (refContainer.current) {
            refContainer.current.appendChild(renderer.domElement);
        }

        var mtlLoader = new MTLLoader();
        mtlLoader.load('/public/HomeCube/cube.mtl', function(materials){
            materials.preload();

            var objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load('public/HomeCube/cube.obj', function(object){
                scene.add(object);
            })
        });
        // Create a cube geometry and material


        camera.position.z = 5;

        // Animation loop
        //const animate = () => {
            //requestAnimationFrame(animate);
            //cube.rotation.x += 0.01;
            //cube.rotation.y += 0.01;
            //renderer.render(scene, camera);
       // };
        //animate();

        // Clean up on unmount
        return () => {
            if (refContainer.current) {
                refContainer.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div ref={refContainer}></div>
    );
}

export default MyThree;
