const scene = new THREE.Scene();
console.log(THREE)

const geometry = new THREE.BoxGeometry(5, 5, 2);

const material = new THREE.MeshBasicMaterial({ color: "red" });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const size = {
  width: 700,
  height: 200,
};

// Set up the camera with a proper field of view and aspect ratio
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 5; // Position the camera so it's not inside the cube
scene.add(camera);

// Find the container and set up the renderer properly
const target = document.querySelector(".box");
const renderer = new THREE.WebGLRenderer({ canvas: target });

// Set the renderer size to match the dimensions
renderer.setSize(size.width, size.height);

// Render the scene from the camera's perspective
renderer.render(scene, camera);
