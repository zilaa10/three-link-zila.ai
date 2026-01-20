const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Stars
const geometry = new THREE.BufferGeometry();
const count = 2000;
const positions = [];

for (let i = 0; i < count; i++) {
  positions.push(
    (Math.random() - 0.5) * 50,
    (Math.random() - 0.5) * 50,
    (Math.random() - 0.5) * 50
  );
}

geometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(positions, 3)
);

const material = new THREE.PointsMaterial({
  color: 0x38bdf8,
  size: 0.06
});

const stars = new THREE.Points(geometry, material);
scene.add(stars);

function animate() {
  requestAnimationFrame(animate);
  stars.rotation.y += 0.0005;
  stars.rotation.x += 0.0003;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
