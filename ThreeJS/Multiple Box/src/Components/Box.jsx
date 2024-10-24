import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Box = () => {
  const box = useRef(null);
  
  
  useEffect(() => {
    // console.log(THREE);
    const scene = new THREE.Scene();

    const giometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(giometry, material);
    
    mesh.position.set(0, 0, 0);
    scene.add(mesh);

    const size = {
      width: 700,
      height: 400,
    };
    const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
    camera.position.z = 3;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas: box.current });
    renderer.setSize(size.width, size.height);
    renderer.render(scene, camera);
  }, []);
  return (
    <div>
      <canvas ref={box}></canvas>
    </div>
  );
};

export default Box;
