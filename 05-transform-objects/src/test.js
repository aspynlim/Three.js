const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

/* Position */
// mesh.position.x = 10
// mesh.position.y = 2
// mesh.position.z = 1
mesh.position.set(10, -2 , 1)

/* scale */
mesh.scale.x = 1
mesh.scale.y = 0.5
mesh.scale.z = 0.5

/* rotation */
mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

scene.add(mesh)