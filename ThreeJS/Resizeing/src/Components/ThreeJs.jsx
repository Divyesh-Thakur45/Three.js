import React, { useEffect, useRef } from "react";
import "../Components/ThreeJs.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const ThreeJs = () => {
  const Box = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    window.addEventListener("dblclick", () => {
      if (!document.fullscreenElement) {
        console.log("Please enable fullscreen");
        Box.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });
    const Sphere = new THREE.Mesh(
      new THREE.SphereGeometry(2, 20, 15),
      new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    );
    const Icosahedron = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1, 1),
      new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    );

    // const torus = new THREE.Mesh(
    //   new THREE.TorusGeometry(1, 3, 16, 10),
    //   new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    // );

    scene.add(Sphere);
    scene.add(Icosahedron);
    // scene.add(torus);

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: Box.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

    const controles = new OrbitControls(camera, Box.current);
    controles.enableDamping = true;
    const clock = new THREE.Clock();
    const animation = () => {
      const elapsedTime = clock.getElapsedTime();
      Sphere.rotation.y = elapsedTime;
      Sphere.rotation.x = elapsedTime;

      controles.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animation);
    };
    animation();
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });
  }, []);
  return (
    <div>
      <canvas ref={Box}></canvas>
    </div>
  );
};

export default ThreeJs;
