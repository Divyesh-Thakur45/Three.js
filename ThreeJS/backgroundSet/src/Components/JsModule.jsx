import React, { useEffect, useRef } from "react";
import "./JsModule.css";
import JsImage from "../Image/JavaScript-logo.png";
import JsImageBG from "../Image/js.jpg";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const JsModule = () => {
  console.log(RGBELoader);
  const jsModal = useRef(null);
  const ThreeDModal = () => {
    const scene = new THREE.Scene();
    const loadingManager = new THREE.LoadingManager();
    const texture = new THREE.TextureLoader(loadingManager).load(JsImage);
    texture.colorSpace = THREE.SRGBColorSpace;
    // texture.repeat.z = 0;

    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 3, 1),
      new THREE.MeshBasicMaterial({ map: texture })
    );
    scene.add(mesh);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    scene.add(camera);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: jsModal.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);

    // const clock = new THREE.Clock();
    const rgbelLoader = new RGBELoader();
    rgbelLoader.load(JsImageBG, (environmentMap) => {
      console.log(environmentMap);
      environmentMap.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = environmentMap;
      // scene.environment = environmentMap;
    });
    const clock = new THREE.Clock();
    const animation = () => {
      const ElapsedTime = clock.getElapsedTime();
      mesh.rotation.y = ElapsedTime;
      window.requestAnimationFrame(animation);
      renderer.render(scene, camera);
    };
    animation();
  };
  useEffect(() => {
    ThreeDModal();
  }, []);
  return (
    <div>
      <canvas ref={jsModal}></canvas>
    </div>
  );
};

export default JsModule;
