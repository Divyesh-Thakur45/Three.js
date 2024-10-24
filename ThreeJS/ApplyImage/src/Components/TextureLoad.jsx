import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import worldTexture from "../Image/world.jpeg";

const TextureLoad = () => {
  const Box = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(worldTexture);

    // Create sphere mesh with texture
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, 35, 35),
      new THREE.MeshBasicMaterial({ map: texture })
    );
    scene.add(mesh);

    // Set up sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 3;
    scene.add(camera);

    // Create OrbitControls
    const controls = new OrbitControls(camera, Box.current);
    controls.enableDamping = true;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: Box.current,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Handle window resizing
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
    });

    // Animation function
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotate the mesh
      mesh.rotation.y = elapsedTime;

      // Update controls with damping
      controls.update();

      // Render the scene
      renderer.render(scene, camera);

      // Call the next frame
      requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();
  }, []);

  return (
    <div>
      <canvas ref={Box}></canvas>
    </div>
  );
};

export default TextureLoad;
