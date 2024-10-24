import "../Components/Animation.css";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Animation = () => {
  const Box = useRef(null);

  const ThreeDModal = () => {
    // Scene setup
    const scene = new THREE.Scene();

    // Full Screen Setup
    window.addEventListener("dblclick", () => {
      if (!document.fullscreenElement) {
        console.log("Full Screen Mode Active");
        Box.current.requestFullscreen(); // Corrected typo and used Box.current
      } else {
        console.log("Full Screen Mode Off");
        document.exitFullscreen();
      }
    });

    // Create a cube mesh
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(2, 35, 35),   
      new THREE.MeshBasicMaterial({ color: 0x00ff00 , wireframe: true })
    );
    scene.add(mesh);

    // Size settings
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Camera setup (correcting aspect ratio)
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height, // Corrected aspect ratio
      1,
      100
    );
    camera.position.z = 5;
    scene.add(camera);

    // Controls setup
    const controls = new OrbitControls(camera, Box.current);
    controls.enableDamping = true;

    // Resize event handling
    window.addEventListener("resize", () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // Update camera aspect ratio and renderer size
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas: Box.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Animation function
    const clock = new THREE.Clock();
    const animation = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update mesh rotation (can be uncommented if needed)
      // mesh.rotation.x = elapsedTime;
      // mesh.rotation.y = elapsedTime;

      // Update controls
      controls.update();

      // Render the scene
      renderer.render(scene, camera);

      // Request the next frame
      window.requestAnimationFrame(animation);
    };

    // Start animation
    animation();
  };

  // Run the 3D model setup once when the component mounts
  useEffect(() => {
    ThreeDModal();
  }, []);

  return (
    <div>
      <canvas ref={Box} className="Box"></canvas>
    </div>
  );
};

export default Animation;
