import React, { useEffect, useRef } from "react";
import "../Components/Computer.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import TopCover from "../Image/ss.jpg"; // Replace with your image path
import keyboard from "../Image/Board.png"; // Replace with your image path

const Computer = () => {
  const Comp = useRef(null);

  const ComputerModal = () => {
    // Create Scene
    const scene = new THREE.Scene();

    // Load Textures for each part of the computer
    const textureLoader = new THREE.TextureLoader();
    const topTexture = textureLoader.load(TopCover);
    topTexture.minFilter = THREE.NearestFilter;
    topTexture.magFilter = THREE.NearestFilter;
    const bottomTexture = textureLoader.load(keyboard);
    bottomTexture.minFilter = THREE.NearestFilter;
    bottomTexture.magFilter = THREE.NearestFilter;
    // Create Top Part (Screen) with different materials for each side
    const TopPartMaterials = [
      new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Red for the right side
      new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Green for the left side
      new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Blue for the top side
      new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Yellow for the bottom side
      new THREE.MeshBasicMaterial({ map: topTexture }), // Texture for the front side
      new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Black for the back side
    ];

    const TopPart = new THREE.Mesh(
      new THREE.BoxGeometry(2, 1, 0.1), // Added depth for 3D effect
      TopPartMaterials
    );
    TopPart.position.y = 0.5; // Move screen up a bit for better proportions

    // Add border (outline) to TopPart
    const topPartEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(TopPart.geometry),
      new THREE.LineBasicMaterial({ color: 0x000000 }) // Black border
    );
    TopPart.add(topPartEdges);

    const BottomPartMaterials = [
      new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Red for the right side
      new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Green for the left side
      new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Blue for the top side
      new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Yellow for the bottom side
      new THREE.MeshBasicMaterial({ map: bottomTexture }), // Texture for the front side
      new THREE.MeshBasicMaterial({ color: 0xe8eef2 }), // Black for the back side
    ];

    // Create Bottom Part (Keyboard area) with texture
    const BottomPart = new THREE.Mesh(
      new THREE.BoxGeometry(2, 1, 0.1),
      BottomPartMaterials,
      new THREE.MeshBasicMaterial({
        map: bottomTexture,
        side: THREE.DoubleSide,
      })
    );

    const Light = new THREE.PointLight(0xffffff, 50);
    scene.add(Light);

    BottomPart.position.y = -0.2;
    BottomPart.position.z = 0.5;
    BottomPart.rotation.x = -1.3;

    // Add border (outline) to BottomPart
    const bottomPartEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(BottomPart.geometry),
      new THREE.LineBasicMaterial({ color: 0x000000 }) // Black border
    );
    BottomPart.add(bottomPartEdges);

    // Combine the two parts into one group
    const computerGroup = new THREE.Group();
    computerGroup.add(TopPart);
    computerGroup.add(BottomPart);

    // Add the group to the scene
    scene.add(computerGroup);

    // Set up Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    camera.position.z = 3;

    // OrbitControl
    const controls = new OrbitControls(camera, Comp.current);
    controls.enableDamping = true;

    // Set up Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: Comp.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add lighting to make the model look better
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Soft white light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(2, 3, 5);
    scene.add(pointLight);

    // Animation function for smooth rendering and rotation
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotate the entire group for some dynamic effect
      // computerGroup.rotation.y = elapsedTime * 0.5; // Adjust rotation speed if needed

      // Render the scene
      renderer.render(scene, camera);
      controls.update();
      // Loop the animation
      requestAnimationFrame(animate);
    };

    // Start the animation
    animate();
  };

  useEffect(() => {
    ComputerModal();
  }, []);

  return (
    <div>
      <canvas ref={Comp} style={{ width: "400px" }}></canvas>
    </div>
  );
};

export default Computer;
