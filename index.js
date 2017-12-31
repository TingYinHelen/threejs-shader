var vShader = document.querySelector('#vertexshader').textContent
var fShader = document.querySelector('#fragmentshader').textContent
// console.log(vShader)


var container = document.querySelector('#container')
var camera, scene, renderer
init()
function init(){
  camera = new THREE.PerspectiveCamera( 75, container.offsetWidth / container.offsetHeight, 1, 10000 )
  camera.position.z = 1000
  scene = new THREE.Scene()
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(container.offsetWidth, container.offsetHeight)



  container.appendChild( renderer.domElement )
  var shaderMaterial = new THREE.ShaderMaterial({
    uniforms:       uniforms,
    vertexShader:   document.getElementById('vertexshader').textContent,
    fragmentShader: document.getElementById('fragmentshader').textContent,
    blending:       THREE.AdditiveBlending,
    depthTest:      false,
    transparent:    true
  });
  particleSystem = new THREE.Points(moreObj, shaderMaterial);

  var radius = 50, segemnt = 16, rings = 16;
  var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius,segemnt,rings),
    shaderMaterial
  )
  scene.add(sphere)
  renderer.render(scene, camera)
}