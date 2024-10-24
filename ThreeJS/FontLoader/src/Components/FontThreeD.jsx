import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import html from "../Image/html.svg"; // Import your image

const FontThreeD = () => {
  const HtmRef = useRef(null);

  const ThreeDModals = () => {
    const scene = new THREE.Scene();
    // Set background color
    scene.background = new THREE.Color(0x123456);

    // Load the image texture
    const texture = new THREE.TextureLoader().load(html);

    // Apply the image texture to all sides of the shape
    const MaterialSides = [
      new THREE.MeshBasicMaterial({ map: texture }), // right
      new THREE.MeshBasicMaterial({ map: texture }), // left
      new THREE.MeshBasicMaterial({ map: texture }), // top
      new THREE.MeshBasicMaterial({ map: texture }), // bottom
      new THREE.MeshBasicMaterial({ map: texture }), // front
      new THREE.MeshBasicMaterial({ map: texture }), // back
    ];

    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;

    // Create the box with the image applied on all sides
    const HTMLModal = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 2, 0.5), // Adjust depth if needed
      MaterialSides
    );
    scene.add(HTMLModal);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas: HtmRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);

    const controls = new OrbitControls(camera, HtmRef.current);
    controls.enableDamping = true;

    const animation = () => {
      requestAnimationFrame(animation);
      controls.update();
      renderer.render(scene, camera);
    };

    animation();
  };

  useEffect(() => {
    ThreeDModals();
  }, []);

  return (
    <div>
      <canvas ref={HtmRef}></canvas>
    </div>
  );
};

export default FontThreeD;
