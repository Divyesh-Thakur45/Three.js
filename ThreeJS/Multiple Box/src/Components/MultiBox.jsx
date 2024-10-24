import React, { useEffect, useRef } from "react";
import * as THREE from "three";
const MultiBox = () => {
  const MultiBox = useRef(null);
  //   scene
  // console.log(THREE)
  useEffect(() => {
    const scene = new THREE.Scene();
    // Group the boxes
    const group = new THREE.Group();

    // Add the group to the scene
    scene.add(group);
    const box1 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: "red" })
    );
    group.add(box1);
    box1.position.set(1, 0, 0);
    const box2 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: "blue" })
    );
    group.add(box2);
    box2.position.set(-1, 0, 0);
    const box3 = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: "green" })
    );
    group.add(box3);
    // const mesh = new THREE.Mesh(giometry, material);
    // scene.add(mesh);
    const size = {
      width: 900,
      height: 600,
    };
    const cemera = new THREE.PerspectiveCamera(75, size.width / size.height);
    cemera.position.z = 5;
    scene.add(cemera);

    const renderer = new THREE.WebGLRenderer({ canvas: MultiBox.current });
    renderer.setSize(size.width, size.height);
    renderer.render(scene, cemera);
  }, []);
  return (
    <div>
      <canvas ref={MultiBox}></canvas>
    </div>
  );
};

export default MultiBox;
