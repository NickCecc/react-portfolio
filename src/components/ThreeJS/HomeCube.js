import * as THREE from 'three';
import { useEffect, useRef } from "react";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { TimelineMax, Expo } from 'gsap';

function MyThree() {
    const refContainer = useRef(null);
    let ourObj, ourObj2;

    useEffect(() => {
        const currentRef = refContainer.current;

        // === THREE.JS CODE START ===
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 25;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor("#DDDDDD");
        renderer.setSize(window.innerWidth, window.innerHeight);

        if (currentRef) {
            currentRef.appendChild(renderer.domElement);
        }

        // Make sure the project is responsive based on window resizing
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Add a light
        //const light = new THREE.PointLight(0xF4FFFF, 1.4, 1000);
       // light.position.set(0, 15, 15);
       //scene.add(light);
        const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Add ambient light to brighten everything up
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight( 0x000000, 10, 100 ); pointLight.position.set( 10, 10, 10 ); scene.add( pointLight );
        // Load first OBJ
        const mtlLoader1 = new MTLLoader();
        mtlLoader1.load('/cube.mtl', function (materials) {
            materials.preload();

            const objLoader1 = new OBJLoader();
            objLoader1.setMaterials(materials);
            objLoader1.load('/cube.obj', function (object) {
                scene.add(object);
                ourObj = object;
                object.position.z -= 370;
                object.rotation.x = 250;
            });
        });



        const renderScene = () => {
            requestAnimationFrame(renderScene);
            if (ourObj) ourObj.rotation.z -= 0.001;
            if (ourObj) ourObj.rotation.x -= 0.001;
            if (ourObj) ourObj.rotation.y -= 0.001;


            renderer.render(scene, camera);
        };

        renderScene();

        // Clean up on unmount
        return () => {
            if (currentRef) {
                currentRef.removeChild(renderer.domElement);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={refContainer} style={{ width: '100%', height: '100%' }}></div>;
}

export default MyThree;
