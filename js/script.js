import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const aspectRatio = window.innerWidth/window.innerHeight;
const camera = new THREE.PerspectiveCamera(
    75, // Field of View, varies between 40 to 80
    aspectRatio,
    0.1,  // Near clipping
    1000  // Far clipping 
);

scene.add(new THREE.AxesHelper(5));
// camera.position.z = 5;
// camera.position.y = 5;
// camera.position.x = 5;
camera.position.set(5,3,10);




renderer.render(scene,camera);