var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
 
// //BOX GEOMETRY
const width = 13;
const height = 13;
const depth = 13;
const geometry = new THREE.BoxBufferGeometry(width, height, depth);

var texture = new THREE.TextureLoader().load( 'textures/test.png' );
var texture2 = new THREE.TextureLoader().load( 'textures/grass.jpg' );
var grass = new THREE.MeshBasicMaterial( { map: texture2 } );
var soil = new THREE.MeshBasicMaterial( { map: texture } );

var plane = new THREE.PlaneBufferGeometry(109, 109, 2, 2);


// var floor = new THREE.Mesh( plane, white);
// scene.add( floor );
var cube = new THREE.Mesh( geometry, soil ); 
var floor = new THREE.Mesh( plane, grass)

scene.add( cube );
scene.add( floor );


