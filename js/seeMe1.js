// these need to be accessed inside more than one function so we'll declare them first
let container;
let camera;
let renderer;
let scene;
let controls;
let cube;
let cube1;
let cube2;
let cube3;
let cube4;
let cube5;
let cube6;
let cube7;
let cube8;
let cube9;
let cube10;
let cube11;
let cube12;
let cubeX;
let cubeY;
let cubeZ;
let mapMesh1;
let transform1;
let count;
var myVar;
let zStart;
let yStart;
let xStart;
let zSpace;
let ySpace;
let xSpace;
let zLimit = -50;

let word0X;
let word0Z;
let word0rotation;



let group0;
let group1;
let group2;
let group3;
let group4;
let group5;
let group6;
let group7;
let group8;
let group9;
let group10;
let group11;
let group12;

let INTERSECTED;
let raycaster;
let mouse;
let r;
let geometry;
let geometry1;
let geometry2;
let observant;
let font;
let fontLoader;
let textGeo;
let textMesh;
let textMaterial;

const mixers = [];
const clock = new THREE.Clock();

let children = [];
let wordArray = [];
let gltfscene;

function init() {

  container = document.querySelector( '#scene-container' );

  scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x707070);
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  createCamera();
  createControls();
  createLights();
  createMaterials();
  loadModels();
  createRenderer();
  createBodies() ; 
  createSkybox();
  // testCube();

  renderer.setAnimationLoop( () => {

    update();
    render();

  } );

}

  function createSkybox(){


  scene.background = new THREE.CubeTextureLoader()
      .setPath('textures/skyboxsun25deg/')
      .load(['nx.jpg', 'ny.jpg', 'nz.jpg', 'px.jpg', 'py.jpg', 'pz.jpg']);
    }

function createCamera() {

  camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 5, 2000 );
  camera.position.set( 50, 50, 800);

}

function createControls() {

  controls = new THREE.OrbitControls( camera, container );

}


function createLights() {

  const ambientLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

  const mainLight = new THREE.DirectionalLight( 0xffffff, 5 );
  mainLight.position.set( 10, 10, 10 );

  scene.add( ambientLight, mainLight );

}

function createMaterials(){

     // let diffuseColor = "#9E4300";

      // var mapTexture1 = new THREE.TextureLoader().load( "textures/skyboxsun25deg/nx.jpg" );
      //       mapTexture1.wrapS = mapTexture1.wrapT = THREE.RepeatWrapping;
      //       mapTexture1.anisotropy = 16;

      // var imgTexture2 = new THREE.TextureLoader().load( "textures/paintnight2.jpg" );
    	// 			imgTexture2.wrapS = imgTexture2.wrapT = THREE.RepeatWrapping;
    	// 			imgTexture2.anisotropy = 16;

      textMaterial1A = new THREE.MeshBasicMaterial({color:0xFFFFFF});
      textMaterial1B = new THREE.MeshBasicMaterial({color:0xEBEBEB});
      textMaterial1C = new THREE.MeshBasicMaterial({color:0xD6D6D6});
      textMaterial1D = new THREE.MeshBasicMaterial({color:0x707070});
      textMaterial2C = new THREE.MeshBasicMaterial({color:0xE20015});
      textMaterial2B = new THREE.MeshBasicMaterial({color:0xB80012});
      textMaterial2D = new THREE.MeshBasicMaterial({color:0xFF0A23});
      textMaterial2A = new THREE.MeshBasicMaterial({color:0x8F000E});
      textMaterial3B = new THREE.MeshBasicMaterial({color:0xf05a2b});
      textMaterial3A = new THREE.MeshBasicMaterial({color:0xE54210});
      textMaterial3C = new THREE.MeshBasicMaterial({color:0xF37953});
      textMaterial3D = new THREE.MeshBasicMaterial({color:0xF69679});
      textMaterial4C = new THREE.MeshBasicMaterial({color:0xebc270});
      textMaterial4B = new THREE.MeshBasicMaterial({color:0xE6B34C});
      textMaterial4D = new THREE.MeshBasicMaterial({color:0xF0D194});
      textMaterial4A = new THREE.MeshBasicMaterial({color:0xE0A329});
      textMaterial5B = new THREE.MeshBasicMaterial({color:0x91b08f});
      textMaterial5C = new THREE.MeshBasicMaterial({color:0x7EA27C});
      textMaterial5A = new THREE.MeshBasicMaterial({color:0xADC4AB});
      textMaterial5D = new THREE.MeshBasicMaterial({color:0x688F66});
      textMaterial6B = new THREE.MeshBasicMaterial({color:0x6a9fa7});
      textMaterial6A = new THREE.MeshBasicMaterial({color:0x5B929A});
      textMaterial6C = new THREE.MeshBasicMaterial({color:0x8BB5BB});
      textMaterial6D = new THREE.MeshBasicMaterial({color:0x6a9fa7});
      textMaterial7C = new THREE.MeshBasicMaterial({color:0x676698});
      textMaterial7B = new THREE.MeshBasicMaterial({color:0x5B929A});
      textMaterial7A = new THREE.MeshBasicMaterial({color:0x4B7981});
      textMaterial7D = new THREE.MeshBasicMaterial({color:0x8BB4BB});
      textMaterial8B = new THREE.MeshBasicMaterial({color:0x95719d});
      textMaterial8A = new THREE.MeshBasicMaterial({color:0x886490});
      textMaterial8C = new THREE.MeshBasicMaterial({color:0xAE93B4});
      textMaterial8D = new THREE.MeshBasicMaterial({color:0xC0ABC4});
      textMaterial9B = new THREE.MeshBasicMaterial({color:0xca2c6d});
      textMaterial9A = new THREE.MeshBasicMaterial({color:0xA7255B});
      textMaterial9C = new THREE.MeshBasicMaterial({color:0xD74783});
      textMaterial9D = new THREE.MeshBasicMaterial({color:0xDE6899});
      textMaterial10C = new THREE.MeshBasicMaterial({color:0xa57371});
      textMaterial10B = new THREE.MeshBasicMaterial({color:0x95615F});
      textMaterial10D = new THREE.MeshBasicMaterial({color:0xB7908F});
      textMaterial10A = new THREE.MeshBasicMaterial({color:0x7C5150});

      material = new THREE.MeshBasicMaterial( {color: 0xB0135A} );
      cubeMaterial1 = new THREE.MeshBasicMaterial( {color: 0xFF477E} ); 
      cubeMaterial2 = new THREE.MeshBasicMaterial( {color: 0xFF5C8A} ); 
      cubeMaterial3 = new THREE.MeshBasicMaterial( {color: 0xFF7096} ); 
      cubeMaterial4 = new THREE.MeshBasicMaterial( {color: 0xFF85A1} ); 
      cubeMaterial5 = new THREE.MeshBasicMaterial( {color: 0xFF99AC} ); 
      cubeMaterial6 = new THREE.MeshBasicMaterial( {color: 0xFBB1BD} ); 
      cubeMaterial7 = new THREE.MeshBasicMaterial( {color: 0xFBB1BD} ); 
      cubeMaterial8 = new THREE.MeshBasicMaterial( {color: 0xF9BEC7} ); 
      cubeMaterial9 = new THREE.MeshBasicMaterial( {color: 0xF7CAD0} ); 
      cubeMaterial10 = new THREE.MeshBasicMaterial( {color: 0xFAE0E4} ); 
      cubeMaterial11 = new THREE.MeshBasicMaterial( {color: 0xE65596} ); 
      cubeMaterial12 = new THREE.MeshBasicMaterial( {color: 0xC92871} ); 
}

function loadModels() {
  zStart=-10;
  zSpace=100;
  yStart=-100;
  ySpace=25;
  xStart=0;
  xSpace=40;
  const loader = new THREE.GLTFLoader();

  // A reusable function to set up the models. We're passing in a position parameter
  // so that they can be individually placed around the scene
  const onLoad = ( gltf, position, material ) => {

    // let model = gltf.scene.children[ 0 ];
    // model.position.copy( position );

    gltfscene = gltf.scene;

    gltfscene.traverse((child) => {
                       if (child.isMesh) {
                       child.material = material; // a material created above
                       child.position.copy( position );
                       gltfscene.rotation.x = -1.2;
                       wordArray.push(child);//make an array with the gltf objects

                  }
                 });
                   scene.add(gltfscene);
                   // console.log(wordArray.length);


  };

  // the loader will report the loading progress to this function
  const onProgress = () => {};

  // the loader will send any error messages to this function, and we'll log
  // them to to console
  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  const grounded = new THREE.Vector3( xStart-xSpace*4,yStart-ySpace*7,zStart+zSpace*10 );
  loader.load( 'models/grounded.glb', gltf => onLoad( gltf, grounded, textMaterial2A ), onProgress, onError );

  const prudent = new THREE.Vector3( xStart+xSpace*1,yStart+ySpace*1,zStart+zSpace*1 );
  loader.load( 'models/prudent.glb', gltf => onLoad( gltf, prudent, textMaterial2B ), onProgress, onError );

  const adventurous = new THREE.Vector3( xStart+xSpace*0.5,yStart+ySpace*2,zStart+zSpace*2 );
  loader.load( 'models/adventurous.glb', gltf => onLoad( gltf, adventurous, textMaterial2C ), onProgress, onError );

  const affectionate = new THREE.Vector3( xStart+xSpace*3,yStart+ySpace*3,zStart+zSpace*3 );
  loader.load( 'models/affectionate.glb', gltf => onLoad( gltf, affectionate, textMaterial2D ), onProgress, onError );

  const athletic = new THREE.Vector3(xStart+xSpace*4,yStart+ySpace*4,zStart+zSpace*4 );
  loader.load( 'models/athletic.glb', gltf => onLoad( gltf, athletic, textMaterial3A ), onProgress, onError );

  const astute = new THREE.Vector3( xStart+xSpace*1,yStart+ySpace*1,zStart+zSpace*5 );
  loader.load( 'models/astute.glb', gltf => onLoad( gltf, astute, textMaterial3B ), onProgress, onError );

  const assertive = new THREE.Vector3( xStart+xSpace*2,yStart+ySpace*2,zStart+zSpace*6 );
  loader.load( 'models/assertive.glb', gltf => onLoad( gltf, assertive, textMaterial3C ), onProgress, onError );

  const amicable = new THREE.Vector3( xStart+xSpace*3,yStart+ySpace*3,zStart+zSpace*7 );
  loader.load( 'models/amicable.glb', gltf => onLoad( gltf, amicable, textMaterial3D ), onProgress, onError );

  const benevolent = new THREE.Vector3( xStart+xSpace*1.5,yStart+ySpace*1.5,zStart+zSpace*8 );
  loader.load( 'models/benevolent.glb', gltf => onLoad( gltf, benevolent, textMaterial4A ), onProgress, onError );

  const considerate = new THREE.Vector3( xStart+xSpace*0.5,yStart+ySpace*2,zStart+zSpace*6 );
  loader.load( 'models/considerate.glb', gltf => onLoad( gltf, considerate, textMaterial4B ), onProgress, onError );

  const courageous = new THREE.Vector3( xStart+xSpace*1,yStart+ySpace*7,zStart+zSpace*6 );
  loader.load( 'models/courageous.glb', gltf => onLoad( gltf, courageous, textMaterial4C ), onProgress, onError );

  const decisive = new THREE.Vector3( xStart+xSpace*2,yStart-ySpace*1,zStart+zSpace*1 );
  loader.load( 'models/decisive.glb', gltf => onLoad( gltf, decisive, textMaterial4D ), onProgress, onError );

  const devoted = new THREE.Vector3( xStart+xSpace*3,yStart+ySpace*1,zStart+zSpace*2 );
  loader.load( 'models/devoted.glb', gltf => onLoad( gltf, devoted, textMaterial5A ), onProgress, onError );

  const diligent = new THREE.Vector3( xStart+xSpace*4,yStart+ySpace*1,zStart+zSpace*5 );
  loader.load( 'models/diligent.glb', gltf => onLoad( gltf, diligent, textMaterial5B ), onProgress, onError );

  const diplomatic = new THREE.Vector3( xStart+xSpace*2,yStart-ySpace*1.5,zStart+zSpace*4 );
  loader.load( 'models/diplomatic.glb', gltf => onLoad( gltf, diplomatic, textMaterial5C ), onProgress, onError );

  const disciplined = new THREE.Vector3( xStart+xSpace*4,yStart-ySpace*2,zStart+zSpace*5 );
  loader.load( 'models/disciplined.glb', gltf => onLoad( gltf, disciplined, textMaterial5D ), onProgress, onError );

  const empowered = new THREE.Vector3( xStart+xSpace*4.5,yStart-ySpace*1,zStart+zSpace*6 );
  loader.load( 'models/empowered.glb', gltf => onLoad( gltf, empowered, textMaterial6A ), onProgress, onError );

  const empathetic = new THREE.Vector3( xStart+xSpace*5,yStart-ySpace*4,zStart+zSpace*4 );
  loader.load( 'models/empathetic.glb', gltf => onLoad( gltf, empathetic, textMaterial6B), onProgress, onError );

  const generous = new THREE.Vector3( xStart+xSpace*6,yStart-ySpace*3,zStart+zSpace*2 );
  loader.load( 'models/generous.glb', gltf => onLoad( gltf, generous, textMaterial6C ), onProgress, onError );

  const innovative = new THREE.Vector3( xStart+xSpace*5,yStart-ySpace*1,zStart+zSpace*9 );
  loader.load( 'models/innovative.glb', gltf => onLoad( gltf, innovative, textMaterial6D ), onProgress, onError );

  const inquisitive = new THREE.Vector3( xStart-xSpace*5,yStart+ySpace*0,zStart+zSpace*1 );
  loader.load( 'models/inquisitive.glb', gltf => onLoad( gltf, inquisitive, textMaterial7A ), onProgress, onError );

  const inspiring = new THREE.Vector3( xStart-xSpace*3,yStart+ySpace*1,zStart+zSpace*1 );
  loader.load( 'models/inspiring.glb', gltf => onLoad( gltf, inspiring, textMaterial7B ), onProgress, onError );

  const intuitive = new THREE.Vector3( xStart-xSpace*7,yStart+ySpace*2,zStart+zSpace*2 );
  loader.load( 'models/intuitive.glb', gltf => onLoad( gltf, intuitive, textMaterial7C ), onProgress, onError );

  const merciful = new THREE.Vector3( xStart-xSpace*5,yStart+ySpace*3,zStart+zSpace*3 );
  loader.load( 'models/merciful.glb', gltf => onLoad( gltf, merciful, textMaterial7D ), onProgress, onError );

  const motivated = new THREE.Vector3( xStart-xSpace*6,yStart+ySpace*4,zStart+zSpace *4 );
  loader.load( 'models/motivated.glb', gltf => onLoad( gltf, motivated, textMaterial8A ), onProgress, onError );

  const persistent = new THREE.Vector3( xStart-xSpace*7,yStart+ySpace*5,zStart+zSpace  *5 );
  loader.load( 'models/persistent.glb', gltf => onLoad( gltf, persistent, textMaterial8B ), onProgress, onError );

  const quickwitted = new THREE.Vector3( xStart-xSpace*8,yStart+ySpace*2,zStart+zSpace*6 );
  loader.load( 'models/quickwitted.glb', gltf => onLoad( gltf, quickwitted, textMaterial8C ), onProgress, onError );

  const resolute = new THREE.Vector3( xStart-xSpace*7,yStart-ySpace*2,zStart+zSpace*7 );
  loader.load( 'models/resolute.glb', gltf => onLoad( gltf, resolute, textMaterial8D ), onProgress, onError );

  const resourceful = new THREE.Vector3( xStart-xSpace*4,yStart+ySpace*8,zStart+zSpace*5 );
  loader.load( 'models/resourceful.glb', gltf => onLoad( gltf, resourceful, textMaterial9A ), onProgress, onError );

  const selfassured = new THREE.Vector3( xStart-xSpace*1,yStart+ySpace*9,zStart+zSpace*3 );
  loader.load( 'models/selfassured.glb', gltf => onLoad( gltf, selfassured, textMaterial9B ), onProgress, onError );

  const sincere = new THREE.Vector3( xStart-xSpace*2,yStart+ySpace*10,zStart+zSpace*5 );
  loader.load( 'models/sincere.glb', gltf => onLoad( gltf, sincere, textMaterial9C ), onProgress, onError );

  const skilled = new THREE.Vector3( xStart-xSpace*3,yStart-ySpace*1,zStart+zSpace*1 );
  loader.load( 'models/skilled.glb', gltf => onLoad( gltf, skilled, textMaterial9D ), onProgress, onError );

  const steadfast = new THREE.Vector3( xStart-xSpace*4,yStart-ySpace*2,zStart+zSpace*2);
  loader.load( 'models/steadfast.glb', gltf => onLoad( gltf, steadfast, textMaterial10A ), onProgress, onError );

  const tenacious = new THREE.Vector3( xStart-xSpace*7,yStart-ySpace*2,zStart+zSpace*3 );
  loader.load( 'models/tenacious.glb', gltf => onLoad( gltf, tenacious, textMaterial10B ), onProgress, onError );

  const trustworthy = new THREE.Vector3( xStart-xSpace*6,yStart-ySpace*3,zStart+zSpace*4 );
  loader.load( 'models/trustworthy.glb', gltf => onLoad( gltf, trustworthy, textMaterial10C ), onProgress, onError );

  const capable = new THREE.Vector3( xStart-xSpace*3,yStart-ySpace*5,zStart+zSpace*5 );
  loader.load( 'models/capable.glb', gltf => onLoad( gltf, capable, textMaterial10D ), onProgress, onError );

  const confident = new THREE.Vector3( xStart-xSpace*6,yStart-ySpace*4,zStart+zSpace*6 );
  loader.load( 'models/confident.glb', gltf => onLoad( gltf, confident, textMaterial1A ), onProgress, onError );

  const creative = new THREE.Vector3( xStart-xSpace*3,yStart-ySpace*2,zStart+zSpace*7 );
  loader.load( 'models/creative.glb', gltf => onLoad( gltf, creative, textMaterial1B ), onProgress, onError );

  const ambitious = new THREE.Vector3( xStart-xSpace*5,yStart-ySpace*2,zStart+zSpace*8 );
  loader.load( 'models/ambitious.glb', gltf => onLoad( gltf, ambitious, textMaterial1C ), onProgress, onError );

  const observant = new THREE.Vector3( xStart-xSpace*1,yStart-ySpace*3,zStart+zSpace*9 );
  loader.load( 'models/observant.glb', gltf => onLoad( gltf, observant, textMaterial1D ), onProgress, onError );

}

function createBodies(){  
    cubeX = 20;
    cubeY = -50;
    cubeZ = 400;


    const bodycone = new THREE.ConeBufferGeometry(5,7,50);
    const headGeo = new THREE.SphereGeometry(2,32,32);

    body0 = new THREE.Mesh( bodycone, material );
    body0.position.set(cubeX, cubeY, cubeZ);
    body0.rotation.z = 0.5;
    const head0 = new THREE.Mesh (headGeo, material);
    head0.position.set(cubeX-1.5, cubeY+3.2, cubeZ);

    group0 = new THREE.Group();
    group0.add(head0);
    group0.add(body0);

    cube1 = new THREE.Mesh(bodycone, cubeMaterial1 );
    cube1.position.set(cubeX, cubeY, cubeZ);
    cube1.rotation.x = 0.5;
    const head1 = new THREE.Mesh (headGeo, cubeMaterial1);
    head1.position.set(cubeX-1.5, cubeY+3.2, cubeZ);

    group1 = new THREE.Group();
    group1.add(head1);
    group1.add(cube1);

    cube2 = new THREE.Mesh( bodycone, cubeMaterial2 );
    cube2.position.set(cubeX,cubeY,cubeZ);
    cube2.rotation.z = 0.5;
    const head2 = new THREE.Mesh (headGeo, cubeMaterial2);
    head2.position.set(cubeX-1.5, cubeY+3.2, cubeZ);

    group2 = new THREE.Group();
    group2.add(head2);
    group2.add(cube2);

    cube3 = new THREE.Mesh( bodycone, cubeMaterial3 );
    cube3.position.set(cubeX,cubeY,cubeZ);
    cube3.rotation.x = 0.5;
    const head3 = new THREE.Mesh (headGeo, cubeMaterial3);
    head3.position.set(cubeX-1.5, cubeY+3.2, cubeZ);

    group3 = new THREE.Group();
    group3.add(head3);
    group3.add(cube3);


    cube4 = new THREE.Mesh( bodycone, cubeMaterial4 );
    cube4.position.set(cubeX,cubeY,cubeZ);
    cube4.rotation.z = 0.5;
    const head4 = new THREE.Mesh (headGeo, cubeMaterial4);
    head4.position.set(cubeX-1.5, cubeY+3.2, cubeZ);
    group4 = new THREE.Group();
    group4.add(head4);
    group4.add(cube4);


    cube5 = new THREE.Mesh( bodycone, cubeMaterial5 );
    cube5.position.set(cubeX,cubeY,cubeZ);
    cube5.rotation.x = 0.5;
    const head5 = new THREE.Mesh (headGeo, cubeMaterial5);
    head5.position.set(cubeX-1.5, cubeY+3.2, cubeZ);
    group5 = new THREE.Group();
    group5.add(head5);
    group5.add(cube5);


    cube6 = new THREE.Mesh( bodycone, cubeMaterial6 );
    cube6.position.set(cubeX,cubeY,cubeZ);
    cube6.rotation.z = 0.5;
    const head6 = new THREE.Mesh (headGeo, cubeMaterial6);
    head6.position.set(cubeX-1.5, cubeY+3.2, cubeZ);
    group6 = new THREE.Group();
    group6.add(head6);
    group6.add(cube6);


    cube7 = new THREE.Mesh( bodycone, cubeMaterial7 );
    cube7.position.set(cubeX,cubeY,cubeZ);
    cube7.rotation.x = 0.5;
    const head7 = new THREE.Mesh (headGeo, cubeMaterial7);
    head7.position.set(cubeX-1.5, cubeY+3.2, cubeZ);
    group7 = new THREE.Group();
    group7.add(head7);
    group7.add(cube7);


    cube8 = new THREE.Mesh( bodycone, cubeMaterial8 );
    cube8.position.set(cubeX,cubeY,cubeZ);
    cube8.rotation.z = 0.5;
    const head8 = new THREE.Mesh (headGeo, cubeMaterial8);
    head8.position.set(cubeX-1.5, cubeY+3.2, cubeZ);
    group8 = new THREE.Group();
    group8.add(head8);
    group8.add(cube8);
 

    cube9 = new THREE.Mesh( bodycone, cubeMaterial9 );
    cube9.position.set(cubeX,cubeY,cubeZ);
    cube9.rotation.x = 0.5;
    const head9 = new THREE.Mesh (headGeo, cubeMaterial9);
    head9.position.set(cubeX-1.5, cubeY+3.2, cubeZ);
    group9 = new THREE.Group();
    group9.add(head9);
    group9.add(cube9);


    cube10 = new THREE.Mesh( bodycone, cubeMaterial10 );
    cube10.position.set(cubeX,cubeY,cubeZ);
    cube10.rotation.z = 0.5;
    const head10 = new THREE.Mesh (headGeo, cubeMaterial10);
    head10.position.set(cubeX-1.5, cubeY+3.2, cubeZ);
    group10 = new THREE.Group();
    group10.add(head10);
    group10.add(cube10);


    cube11 = new THREE.Mesh( bodycone, cubeMaterial11 );
    cube11.position.set(cubeX,cubeY,cubeZ);
    cube11.rotation.x = 0.5;
    const head11 = new THREE.Mesh (headGeo, cubeMaterial11);
    head11.position.set(cubeX-1.5, cubeY+3.2, cubeZ);
    group11 = new THREE.Group();
    group11.add(head11);
    group11.add(cube11);


    cube12 = new THREE.Mesh( bodycone, cubeMaterial12 );
    cube12.position.set(cubeX,cubeY,cubeZ);
    cube12.rotation.z = 0.5;
    const head12 = new THREE.Mesh (headGeo, cubeMaterial12);
    head12.position.set(cubeX-1.5, cubeY+3.2, cubeZ);
    group12 = new THREE.Group();
    group12.add(head12);
    group12.add(cube12);


     scene.add( cube, group1, group2, group3, group4, group5, group6, group7, group8, group9, group10, group11, group12, group0 ); 

} 



function createRenderer() {

  // create a WebGLRenderer and set its width and height
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setPixelRatio( window.devicePixelRatio );

  // renderer.gammaFactor = 2.2;
  // renderer.gammaOutput = true;
  renderer.outputEncoding = true;

  renderer.physicallyCorrectLights = true;



  container.appendChild( renderer.domElement );

}


function update() {


}

// function raycast() {
//
//   raycaster.setFromCamera( mouse, camera );
//
//   var intersects = raycaster.intersectObjects( scene.children);
//   for (i = 0; i < intersects.length; i++ ){
//
//   if ( intersects.length > 0 ) {
//
//     if ( INTERSECTED != intersects[ 0 ].object ) {
// // console.log(INTERSECTED);
//       if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
//
//       INTERSECTED = intersects[ 0].object;
//       INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
//       INTERSECTED.material.color.setHex( 0xd4d4d4 );
//       INTERSECTED.position.set(0,0,0);
//       // intersects[0].object.position.set(word0X,0,word0Z);
//
//     }
//
//   } else {
//
//     if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
//
//     INTERSECTED = null;
//
//   }
// }
// console.log(intersects[0]);


// }




function render() {
  // update the picking ray with the camera and mouse position
  // raycast();

  // calculate objects intersecting the picking ray
  // const intersects = raycaster.intersectObjects(scene.children, true );





//   for ( var i = 0; i < wordArray.length; i++ ){
//
//     // moveWord();
//     // changeColor();
// //     // loadModels();
//     // testMove();
// //     // stopRotation();
// //     // textAppear();
buildFigure();

//
//   }
// console.log(scene.children);
  // console.log(intersects[i].objects);
  // console.log(intersects.length);

// function moveWord(){
//   intersects[i].wordArray[0].position.set(word0X,0,word0Z);
// }

// function testMove(){
//   word0X=-50;
//   word0Z=-10;
//   word0rotation=.2;
//
//   wordArray[0].position.set(-50,0,-10);
//   wordArray[0].rotation.z=.2;
//   wordArray[1].position.set(word0X+80,0,word0Z-10);
//   wordArray[1].rotation.z = word0rotation-.7;
//
//
//
// }





  renderer.render( scene, camera );

  // rotateCubes();
  moveCubes1();
  textAppear();

}


function textAppear(){
  // if (group1.position.x<-20){
    for ( var i = 0; i < wordArray.length; i++ ){
      if(wordArray[i].position.z>=zStart){

  wordArray[i].position.z -=0.2;

  // console.log(wordArray.length);

}

}
}

function buildFigure(){
word0X=-50;
word0Z=-10;
word0rotation=.2;
var time = 10;
var wordZStart = -340;

if (wordArray[0].position.z<=zStart){

if (group1.position.x<=wordZStart){
  wordArray[0].position.set(word0X,0,word0Z);
  wordArray[0].rotation.z = word0rotation;
  // wordArray[0].material = textMaterial1A;

}

if (group1.position.x<wordZStart-time*1){
  wordArray[2].position.set(word0X+110,0,word0Z-30);
  wordArray[2].rotation.z = word0rotation-.8;
  wordArray[0].material = textMaterial1C;
}

if (group1.position.x<wordZStart-time*2){
  wordArray[3].position.set(word0X-40,0,word0Z-20);
  wordArray[3].rotation.z = word0rotation+1;
  wordArray[1].material = textMaterial1D;
}
if (group1.position.x<wordZStart-time*3){
  wordArray[1].position.set(word0X+80,0,word0Z-10);
  wordArray[1].rotation.z = word0rotation-.7;

}
if (group1.position.x<wordZStart-time*4){
  wordArray[6].position.set(word0X+85,0,word0Z-45);
  wordArray[6].rotation.z = word0rotation-.9;
  wordArray[4].material = textMaterial2A;
}

if (group1.position.x<wordZStart-time*5){
  wordArray[9].position.set(word0X+115,0,word0Z-65);
  wordArray[9].rotation.z = word0rotation+.7;
  wordArray[7].material = textMaterial2B;
}
if (group1.position.x<wordZStart-time*6){
  wordArray[7].position.set(35,0,-70);
  wordArray[7].rotation.z = 1;
  wordArray[5].material = textMaterial2C;
}

if (group1.position.x<wordZStart-time*7){
  wordArray[5].position.set(35,0,-115);
  wordArray[5].rotation.z = .25;
  wordArray[3].material = textMaterial2D;
}

if (group1.position.x<wordZStart-time*8){
  wordArray[8].position.set(-85,0,-110);
  wordArray[8].rotation.z =-1;
  wordArray[6].material = textMaterial3A;

}

if (group1.position.x<wordZStart-time*9){
  wordArray[4].position.set(-50,0,-125);
  wordArray[4].rotation.z = .4;
  wordArray[2].material = textMaterial3B;
}
if (group1.position.x<wordZStart-time*10){
  wordArray[10].position.set(-65,0,-100);
  wordArray[10].rotation.z =-1;
  wordArray[8].material = textMaterial3C;
}

if (group1.position.x<wordZStart-time*11){
  wordArray[11].position.set(-65,0,-40);
  wordArray[11].rotation.z = .9;
  wordArray[9].material = textMaterial3D;
}
if (group1.position.x<wordZStart-time*12){
  wordArray[12].position.set(-50,0,-85);
  wordArray[12].rotation.z =1.7;
  wordArray[10].material = textMaterial4A;

}

if (group1.position.x<wordZStart-time*13){
  wordArray[13].position.set(-50,0,-40);
  wordArray[13].rotation.z = 1.4;
  wordArray[11].material = textMaterial4B;
}
if (group1.position.x<wordZStart-time*14){
  wordArray[30].position.set(15,0,-60);
  wordArray[30].rotation.z =-1.25;
  wordArray[12].material = textMaterial4C;
}
if (group1.position.x<wordZStart-time*15){
  wordArray[31].position.set(20,0,-70);
  wordArray[31].rotation.z = 1.4;
  wordArray[13].material = textMaterial4D;
}
if (group1.position.x<wordZStart-time*16){
  wordArray[14].position.set(45,0,-160);
  wordArray[14].rotation.z =-1.1;
wordArray[30].material = textMaterial5A;
}
if (group1.position.x<wordZStart-time*17){
  wordArray[15].position.set(45,0,-170);
  wordArray[15].rotation.z = 1.5;
  wordArray[31].material = textMaterial5B;
}
if (group1.position.x<wordZStart-time*18){
  wordArray[16].position.set(40,0,-205);
  wordArray[16].rotation.z = 1.2;
  wordArray[14].material = textMaterial5C;
}
if (group1.position.x<wordZStart-time*19){
  wordArray[17].position.set(-50,0,-150);
  wordArray[17].rotation.z = 1.45;
  wordArray[15].material = textMaterial5D;
}
if (group1.position.x<wordZStart-time*20){
  wordArray[18].position.set(-50,0,-210);
  wordArray[18].rotation.z = -1.3;
  wordArray[16].material = textMaterial6A;
}
if (group1.position.x<wordZStart-time*21){
  wordArray[19].position.set(-50,0,-240);
  wordArray[19].rotation.z = -1.3;
  wordArray[17].material = textMaterial6B;
}
if (group1.position.x<wordZStart-time*22){
  wordArray[20].position.set(-50,0,-270);
  wordArray[20].rotation.z = -1.3;
  wordArray[18].material = textMaterial6C;
}
if (group1.position.x<wordZStart-time*23){
  wordArray[21].position.set(-50,0,-290);
  wordArray[21].rotation.z = 1;
  wordArray[19].material = textMaterial6D;
}

if (group1.position.x<=wordZStart-time*24){
  wordArray[40].position.set(-50,0,-290);
  wordArray[40].rotation.z = 1;
  wordArray[20].material = textMaterial7A;
}

if (group1.position.x<wordZStart-time*25){
  wordArray[39].position.set(-50,0,-270);
  wordArray[39].rotation.z = -1.3;
  wordArray[21].material = textMaterial7B;
}

if (group1.position.x<wordZStart-time*26){
  wordArray[38].position.set(-50,0,-240);
  wordArray[38].rotation.z = -1.3;
  wordArray[40].material = textMaterial8A;
}
if (group1.position.x<wordZStart-time*27){
  wordArray[37].position.set(-50,0,-125);
  wordArray[37].rotation.z = .4;
  wordArray[39].material = textMaterial8B;
}
if (group1.position.x<wordZStart-time*27){
  wordArray[36].position.set(-50,0,-150);
  wordArray[36].rotation.z =1.45;
  wordArray[38].material = textMaterial9A;
}

if (group1.position.x<wordZStart-time*29){
  wordArray[35].position.set(40,0,-205);
  wordArray[35].rotation.z = 1.2;
  wordArray[37].material = textMaterial8B;
}
if (group1.position.x<wordZStart-time*30){
  wordArray[34].position.set(45,0,-170);
  wordArray[34].rotation.z = 1.5;
  wordArray[36].material = textMaterial10A;
}

if (group1.position.x<wordZStart-time*31){
  wordArray[33].position.set(35,0,-115);
  wordArray[33].rotation.z = .25;
  wordArray[35].material = textMaterial4A;
}

if (group1.position.x<wordZStart-time*32){
  wordArray[32].position.set(-85,0,-110);
  wordArray[32].rotation.z =-1;
  wordArray[34].material = textMaterial9A;
  wordArray[0].material = textMaterial1A;

}

if (group1.position.x<wordZStart-time*33){
  wordArray[29].position.set(word0X-40,0,word0Z-20);
  wordArray[29].rotation.z = word0rotation+1;
  wordArray[33].material = textMaterial9B;
}
if (group1.position.x<wordZStart-time*34){
  wordArray[28].position.set(-65,0,-100);
  wordArray[28].rotation.z =-1;
  wordArray[32].material = textMaterial9C;
}

if (group1.position.x<wordZStart-time*35){
  wordArray[27].position.set(-50,0,-125);
  wordArray[27].rotation.z = .4;
  wordArray[29].material = textMaterial9D;
}
if (group1.position.x<wordZStart-time*36){
  wordArray[26].position.set(-50,0,-85);
  wordArray[26].rotation.z =1.7;
  wordArray[28].material = textMaterial4A;
}

if (group1.position.x<wordZStart-time*37){
  wordArray[25].position.set(-50,0,-40);
  wordArray[25].rotation.z = 1.4;
  wordArray[27].material = textMaterial4B;
}
if (group1.position.x<wordZStart-time*38){
  wordArray[24].position.set(15,0,-60);
  wordArray[24].rotation.z =-1.25;
  wordArray[26].material = textMaterial4C;
}
if (group1.position.x<wordZStart-time*39){
  wordArray[23].position.set(20,0,-70);
  wordArray[23].rotation.z = 1.4;
  wordArray[25].material = textMaterial4D;
}
if (group1.position.x<wordZStart-time*40){
  wordArray[22].position.set(word0X+115,0,word0Z-65);
  wordArray[22].rotation.z =word0rotation+.7;
  wordArray[24].material = textMaterial4D;

}
// console.log(group1.position.x);
}
}


function onMouseMove( event ) {  
  // calculate mouse position in normalized device coordinates 
  // (-1 to +1) for both components  
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1; 
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  } 

function onWindowResize() {

  camera.aspect = container.clientWidth / container.clientHeight;

  // update the camera's frustum
  camera.updateProjectionMatrix();

  renderer.setSize( container.clientWidth, container.clientHeight );

}

function animate() {

  // call animate recursively
  requestAnimationFrame( animate );


// cubeX = cubeX+10;
  renderer.render( scene, camera );

}



function moveCubes1(){
  group0.position.z -= 0.01;
  group1.position.z -= 0.015;
  group2.position.z -= 0.02;
  group3.position.z -= 0.025;
  group4.position.z -= 0.03;
  group5.position.z -= 0.035;
  group6.position.z -= 0.04;
  group7.position.z -= 0.045;
  group8.position.z -= 0.05;
  group9.position.z -= 0.055;
  group10.position.z -= 0.06;
  group11.position.z -= 0.065;
  group12.position.z -= 0.07;
  group0.position.x -= 0.06;
  group1.position.x -= 0.065;
  group2.position.x -= 0.07;
  group3.position.x -= 0.075;
  group4.position.x -= 0.08;
  group5.position.x -= 0.085;
  group6.position.x -= 0.09;
  group7.position.x += 0.06;
  group8.position.x += 0.065;
  group9.position.x += 0.07;
  group10.position.x += 0.075;
  group11.position.x += 0.08;
  group12.position.x += 0.085;
  group0.position.y += 0.01;
  group1.position.y += 0.015;
  group2.position.y += 0.02;
  group3.position.y += 0.025;
  group4.position.y += 0.03;
  group5.position.y += 0.035;
  group6.position.y += 0.04;
  group7.position.y += 0.01;
  group8.position.y += 0.015;
  group9.position.y += 0.02;
  group10.position.y += 0.025;
  group11.position.y += 0.03;
  group12.position.y += 0.035;
}







window.addEventListener( 'resize', onWindowResize );
window.addEventListener('mousemove', onMouseMove, false );



init();

// animate();
