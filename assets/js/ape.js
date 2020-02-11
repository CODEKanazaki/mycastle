let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
 

// //CYLINDER GEOMETRY
const radiusTop = 4;
const radiusBottom = 4;
const height = 50;
const radialSegments = 12;
const geometry = new THREE.CylinderBufferGeometry(radiusTop, radiusBottom, height, radialSegments);

// CYLINDER RIGHT GEOMETRY
const rightRadiusTop = 4;
const rightRadiusBottom = 4;
const rightHeight = 50;
const rightRadialSegments = 12;
const cylinderGeometry = new THREE.CylinderBufferGeometry(rightRadiusTop, rightRadiusBottom, rightHeight, rightRadialSegments);

// CUBE WALL GEOMETRY
const wallWidth = 85;
const wallHeight = 30;
const wallDepth = 10;
const wallGeometry = new THREE.BoxBufferGeometry(wallWidth, wallHeight, wallDepth);

//CONE ROOF LEFT GEOMETRY
const roofRadius = 6;
const roofHeight = 20;
const roofSegments = 16;
const roofGeometry = new THREE.ConeBufferGeometry(roofRadius, roofHeight, roofSegments);

//CONE ROOF RIGHT GEOMETRY
const roofRightRadius = 6;
const roofRightHeight = 20;
const roofRightSegments = 16;
const roofRightGeometry = new THREE.ConeBufferGeometry(roofRightRadius, roofRightHeight, roofRightSegments);


// CUBE GATE GEOMETRY
const gateWidth = 8;
const gateHeight = 8;
const gateDepth = 8;
const gateGeometry = new THREE.BoxBufferGeometry(gateWidth, gateHeight, gateDepth);






//TEXTURES AND MATERIALS
let texture = new THREE.TextureLoader().load( 'assets/textures/oldbrick.jpg' );
// let TextureGrass = new THREE.TextureLoader().load( 'assets/textures/water.jpg' );
let TextureWater = new THREE.TextureLoader().load( 'assets/textures/water.jpg' );
let textureGate = new THREE.TextureLoader().load( 'assets/textures/newgate.jpg');
let pathpic = new THREE.TextureLoader().load( 'assets/textures/cobble.jpg');
let gate = new THREE.MeshBasicMaterial ( { map: textureGate } );
let grass = new THREE.MeshBasicMaterial( { map: TextureWater } );
let brick = new THREE.MeshBasicMaterial( { map: texture } );
let pathbrick = new THREE.MeshBasicMaterial( { map: pathpic } );


//LAND 
let plane = new THREE.PlaneBufferGeometry(500, 500, 2, 2);
let planePathFront = new THREE.PlaneBufferGeometry(20, 100, 2, 2);

//BUILDINGS
let castleLeftBrick = new THREE.Mesh( geometry, brick ); 
let floor = new THREE.Mesh( plane, grass);
let PathFront = new THREE.Mesh( planePathFront, pathbrick);
let castleRightBrick = new THREE.Mesh(cylinderGeometry, brick);
let wall = new THREE.Mesh(wallGeometry, brick);
let roof = new THREE.Mesh(roofGeometry, brick);
let roofRight = new THREE.Mesh(roofRightGeometry, brick);
let gatecastle = new THREE.Mesh(gateGeometry, gate);


scene.add( floor );
scene.add( castleLeftBrick );
scene.add( castleRightBrick );
scene.add ( wall );
scene.add ( roof );
scene.add ( roofRight );
scene.add ( gatecastle );
scene.add ( PathFront );


camera.position.z = 100;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
   requestAnimationFrame( animate );
   
   controls = new THREE.OrbitControls(camera);

   //FLOOR
   floor.rotation.x = 231;
   floor.position.y = -40;
   floor.position.z = -50;

   //planePathFront
   PathFront.position.x = 5;
   PathFront.position.y = -35;
   PathFront.position.z = -10;
   PathFront.rotation.x = 231;
   
   

   //CYLINDER BRICK LEFT
   castleLeftBrick.position.x = -40;
   castleLeftBrick.position.y = -22;
   castleLeftBrick.position.z = -40;

   //CYLINDER BRICK RIGHT
   castleRightBrick.position.x = 50;
   castleRightBrick.position.y = -22;
   castleRightBrick.position.z = -40;

   //CUBE WALL
   wall.position.x = 5;
   wall.position.y = -22;
   wall.position.z = -43;

   //CONE ROOF LEFT
   roof.position.x = -40;
   roof.position.y =  10;
   roof.position.z = -40;
   //CONE ROOF RIGHT
   roofRight. position.x = 50;
   roofRight.position.y = 10;
   roofRight.position.z = -40;

   //GATE CUBE CASTLE
   gatecastle.position.x = 5;
   gatecastle.position.y = -27;
   gatecastle.position.z = -41;

   controls.update();
   

   renderer.render( scene, camera );
}
animate();