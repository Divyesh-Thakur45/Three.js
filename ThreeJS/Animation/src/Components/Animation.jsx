import React, { useEffect, useRef } from "react";
import * as THREE from "three";
const Animation = () => {
  const box = useRef(null);
  console.log(box);

  useEffect(() => {
    const scene = new THREE.Scene();
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    scene.add(mesh);

    const cemera = new THREE.PerspectiveCamera(95, 500 / 350, 1, 100);
    cemera.position.z = 2;
    scene.add(cemera);

    const renderer = new THREE.WebGLRenderer({ canvas: box.current });
    renderer.setSize(1000, 600);
    renderer.render(scene, cemera);
    //   animation
    const clock = new THREE.Clock();
    const RoutationAnimation = () => {
      const ElapsedTime = clock.getElapsedTime();
        mesh.rotation.z = ElapsedTime;
        mesh.rotation.x = ElapsedTime;
    //   mesh.position.y = Math.sin(ElapsedTime);
    //   mesh.position.x = Math.cos(ElapsedTime);
      renderer.render(scene, cemera);
      window.requestAnimationFrame(RoutationAnimation);
    };
    RoutationAnimation();
  }, []);

  return (
    <div>
      <canvas ref={box}></canvas>
    </div>
  );
};

export default Animation;
