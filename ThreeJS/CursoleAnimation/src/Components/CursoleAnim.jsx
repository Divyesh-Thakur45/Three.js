import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const CursoleAnim = () => {
  const box = useRef(null);
  // console.log(THREE)
  useEffect(() => {
    const scene = new THREE.Scene();
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    scene.add(mesh);
    const size = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const camera = new THREE.PerspectiveCamera(
      75,
      size.width / size.height,
      1,
      100
    );
    camera.position.z = 5;
    scene.add(camera);

    const control = new OrbitControls(camera, box.current);
    control.enableDamping = true;

    const renderer = new THREE.WebGLRenderer({ canvas: box.current });
    renderer.setSize(size.width, size.height);

    // renderer.render(scene, camera);

    // Animation
    // const clock = new THREE.Clock();
    const Animation = () => {
      // const ElapsedTime = clock.getElapsedTime();
      // mesh.rotation.x = ElapsedTime;
      // mesh.rotation.y = ElapsedTime;
      control.update();
      renderer.render(scene, camera);

      requestAnimationFrame(Animation);
    };
    Animation();
  }, []);
  return (
    <div>
      <canvas ref={box}></canvas>
    </div>
  );
};

export default CursoleAnim;
