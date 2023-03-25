window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav-bar");
    if (window.scrollY > 0) {
        navbar.classList.add("nav-bar-scrolled");
    } else {
        navbar.classList.remove("nav-bar-scrolled");
    }
});

// let time = 30;
// let timeOut;
// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");
// const app = document.querySelector(".app");
// const message = document.querySelector(".msg");
// const playBtn = document.querySelector(".play");
// const pauseBtn = document.querySelector(".pause");
// const restartBtn = document.querySelector(".restart");

// // functions
// const startTimer = (t) => {
//     timeOut = setInterval(() => {
//         t--;

//         // minute
//         minute.textContent = `${Math.floor(t / 60)}`;
//         if (minute.textContent <= 0) minute.textContent = `00`;
//         if (minute.textContent < 10) minute.textContent = `0${Math.floor(t / 60)}`;

//         // second
//         second.textContent = `${Math.floor(t % 60)}`;
//         if (second.textContent <= 0) second.textContent = `00`;
//         if (second.textContent < 10) second.textContent = `0${Math.floor(t % 60)}`;

//         // end
//         if (t < 0) {
//             app.classList.add("hidden");
//             message.classList.remove("hidden");
//         }
//     }, 1000);
// };
// startTimer(time);

// // buttons
// playBtn.addEventListener("click", () => {
//     startTimer(+(minute.textContent + second.textContent));
// });
// pauseBtn.addEventListener("click", () => {
//     clearInterval(timeOut);
// });
// restartBtn.addEventListener("click", () => {
//     minute.textContent = `00`;
//     second.textContent = `00`;
//     clearInterval(timeOut);
//     startTimer(time);
// });




// Object.defineProperties(THREE.Object3D.prototype, {
//     x: {
//         get: function () {
//             return this.position.x;
//         },
//         set: function (v) {
//             this.position.x = v;
//         }
//     },
//     y: {
//         get: function () {
//             return this.position.y;
//         },
//         set: function (v) {
//             this.position.y = v;
//         }
//     },
//     z: {
//         get: function () {
//             return this.position.z;
//         },
//         set: function (v) {
//             this.position.z = v;
//         }
//     },
//     rotationZ: {
//         get: function () {
//             return this.rotation.x;
//         },
//         set: function (v) {
//             this.rotation.x = v;
//         }
//     },
//     rotationY: {
//         get: function () {
//             return this.rotation.y;
//         },
//         set: function (v) {
//             this.rotation.y = v;
//         }
//     },
//     rotationX: {
//         get: function () {
//             return this.rotation.z;
//         },
//         set: function (v) {
//             this.rotation.z = v;
//         }
//     }
// });

// //===================================================== helpers
// const randnum = (min, max) => Math.round(Math.random() * (max - min) + min);
// const SCALE = 0.75;
// const FAR = 200;
// var tiltShiftEnabled = true;

// //===================================================== add canvas
// var scene = new THREE.Scene();
// var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMapEnabled = true; //Shadow
// renderer.shadowMapSoft = true; // Shadow
// renderer.shadowMapType = THREE.PCFShadowMap; //Shadow
// renderer.gammaInput = true;
// renderer.gammaOutput = true;
// renderer.physicallyBasedShading = true;
// renderer.autoClear = false;
// document.body.appendChild(renderer.domElement);


// //===================================================== add fog
// scene.fog = new THREE.Fog(0x000000, 10, FAR);
// //===================================================== add camera
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);



// //*************************************************************************** add effects
// effectColor = new THREE.ShaderPass(THREE.ColorCorrectionShader);
// effectSSAO = new THREE.ShaderPass(THREE.SSAOShader);
// effectFXAA = new THREE.ShaderPass(THREE.FXAAShader);
// effectScreen = new THREE.ShaderPass(THREE.CopyShader);

// hblur = new THREE.ShaderPass(THREE.HorizontalTiltShiftShader);
// vblur = new THREE.ShaderPass(THREE.VerticalTiltShiftShader);

// var bluriness = 4;

// hblur.uniforms['h'].value = bluriness / (SCALE * window.innerWidth);
// vblur.uniforms['v'].value = bluriness / (SCALE * window.innerHeight);

// hblur.uniforms['r'].value = vblur.uniforms['r'].value = 0.5;

// renderTargetParametersRGB = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };
// renderTargetParametersRGBA = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat };
// depthTarget = new THREE.WebGLRenderTarget(SCALE * window.innerWidth, SCALE * window.innerHeight, renderTargetParametersRGBA);
// colorTarget = new THREE.WebGLRenderTarget(SCALE * window.innerWidth, SCALE * window.innerHeight, renderTargetParametersRGBA);

// effectScreen.renderToScreen = true;
// vblur.renderToScreen = true;

// effectScreen.enabled = !tiltShiftEnabled;

// composer = new THREE.EffectComposer(renderer, colorTarget);
// composer.addPass(effectSSAO);
// composer.addPass(effectColor);
// composer.addPass(effectFXAA);
// composer.addPass(effectScreen);
// composer.addPass(hblur);
// composer.addPass(vblur);

// effectSSAO.uniforms['tDepth'].value = depthTarget;
// effectSSAO.uniforms['size'].value.set(SCALE * window.innerWidth, SCALE * window.innerHeight);
// effectSSAO.uniforms['cameraNear'].value = camera.near;
// effectSSAO.uniforms['cameraFar'].value = camera.far;
// effectSSAO.uniforms['fogNear'].value = scene.fog.near;
// effectSSAO.uniforms['fogFar'].value = scene.fog.far;
// effectSSAO.uniforms['fogEnabled'].value = 1;
// effectSSAO.uniforms['aoClamp'].value = 0.5;

// effectSSAO.material.defines = { "RGBA_DEPTH": true, "ONLY_AO_COLOR": "1.0, 0.7, 0.5" };

// effectFXAA.uniforms['resolution'].value.set(1 / (SCALE * window.innerWidth), 1 / (SCALE * window.innerHeight));

// effectColor.uniforms['mulRGB'].value.set(1.4, 1.4, 1.4);
// effectColor.uniforms['powRGB'].value.set(1.2, 1.2, 1.2);

// // depth pass

// depthPassPlugin = new THREE.DepthPassPlugin();
// depthPassPlugin.renderTarget = depthTarget;

// renderer.addPrePlugin(depthPassPlugin);


// //===================================================== settings
// function setFull() {

//     effectSSAO.uniforms.onlyAO.value = 0;
//     effectSSAO.enabled = true;
//     effectColor.enabled = true;

// };

// function setSSAO() {

//     effectSSAO.uniforms.onlyAO.value = 1;
//     effectSSAO.enabled = true;
//     effectColor.enabled = false;

// };

// function setNoSSAO() {

//     effectSSAO.enabled = false;
//     effectColor.enabled = true;

// };

// //

// function toggleTiltShift() {

//     if (tiltShiftEnabled) {

//         tiltShiftEnabled = false;

//         hblur.enabled = false;
//         vblur.enabled = false;

//         effectScreen.enabled = true;

//     } else {

//         tiltShiftEnabled = true;

//         hblur.enabled = true;
//         vblur.enabled = true;

//         effectScreen.enabled = false;

//     }

// };



// //*************************************************************************** resize
// window.addEventListener("resize", function () {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     renderer.setSize(width, height);
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();

//     //*composer
//     depthTarget = new THREE.WebGLRenderTarget(SCALE * window.innerWidth, SCALE * window.innerHeight, renderTargetParametersRGBA);
//     colorTarget = new THREE.WebGLRenderTarget(SCALE * window.innerWidth, SCALE * window.innerHeight, renderTargetParametersRGBA);

//     composer.reset(colorTarget);

//     effectFXAA.uniforms['resolution'].value.set(1 / (SCALE * window.innerWidth), 1 / (SCALE * window.innerHeight));
//     effectSSAO.uniforms['size'].value.set(SCALE * window.innerWidth, SCALE * window.innerHeight);

//     depthPassPlugin.renderTarget = depthTarget;
//     effectSSAO.uniforms['tDepth'].value = depthTarget;

// });



// //===================================================== add light
// var spotLight = new THREE.SpotLight(new THREE.Color('#345174'), 1);
// spotLight.position.set(10, 10, 0);
// spotLight.castShadow = true;
// scene.add(spotLight);

// //lightHelper = new THREE.SpotLightHelper( spotLight );
// //scene.add( lightHelper );

// var light = new THREE.DirectionalLight(new THREE.Color('white'), 1);
// light.position.set(1, 1, 1).normalize();
// scene.add(light);
// var light = new THREE.DirectionalLight(new THREE.Color('white'), 1);
// light.position.set(-1, -1, -1).normalize();
// scene.add(light);



// PrismGeometry = function (vertices, height) {

//     var Shape = new THREE.Shape();

//     (function f(ctx) {

//         ctx.moveTo(vertices[0].x, vertices[0].y);
//         for (var i = 1; i < vertices.length; i++) {
//             ctx.lineTo(vertices[i].x, vertices[i].y);
//         }
//         ctx.lineTo(vertices[0].x, vertices[0].y);

//     })(Shape);

//     var settings = {};
//     settings.amount = height;
//     settings.bevelEnabled = false;
//     THREE.ExtrudeGeometry.call(this, Shape, settings);

// };

// PrismGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);


// var A = new THREE.Vector2(0, 0);
// var B = new THREE.Vector2(0, 5);
// var C = new THREE.Vector2(5, 5);

// var height = .35;
// var material = new THREE.MeshPhongMaterial({ color: new THREE.Color('#514f3a'), specular: new THREE.Color('#ebebc5'), shininess: 20 });




// var group = new THREE.Object3D();
// scene.add(group);
// var sparks = [];
// for (var i = 0; i < 50; i++) {
//     var geometry = new PrismGeometry([A, B, C], height);
//     var prism1 = new THREE.Mesh(geometry, material);

//     prism1.position.x = 0;
//     prism1.position.y = 0;
//     prism1.position.z = 0;
//     prism1.rotation.x = -Math.PI / randnum(1, 4);
//     prism1.rotation.y = -Math.PI / randnum(1, 4);
//     prism1.rotation.z = -Math.PI / randnum(1, 4);
//     prism1.scale.set(.5, .5, .5);
//     sparks.push(prism1);
//     group.add(prism1);





// }




// function explode() {



//     sparks.map((d, i) => {
//         TweenMax.to(d.position, 2, {
//             x: randnum(-10, 10),
//             y: randnum(-20, 20),
//             z: randnum(-10, 10),
//             /* delay: 2,*/
//             /* repeat: -1*/
//         })
//         TweenMax.to(d, 2, {
//             rotationX: `+=${randnum(5, 10)}`,
//             rotationY: `+=${randnum(5, 10)}`,
//             rotationZ: `+=${randnum(5, 10)}`,
//             /* delay: 2,*/
//             /* repeat: -1*/
//         })



//     });






// }

// document.addEventListener('click', explode);

// explode();





// //===================================================== add controls
// var controls2 = new THREE.OrbitControls(camera, renderer.domElement);
// controls2.maxPolarAngle = Math.PI / 2; //How far you can orbit vertically, upper and lower limits. The maximum is Pi / 2 (90deg).

// //===================================================== add model
// let angle = 0, lastTime = null, count = 0;
// var clock = new THREE.Clock();
// var prevTime = Date.now();


// function animate() {
//     var time = Date.now() * 0.00025;
//     if (lastTime != null) angle += (time - lastTime) * 0.0001;
//     lastTime = time


//     requestAnimationFrame(animate);
//     //renderer.render(scene, camera);

//     /* if(body){
//        camera.position.z = body.position.z + Math.cos(time) * 15;
//        camera.position.x = body.position.x + Math.sin(time) * 20;
//        //camera.position.y = 10;
//        camera.position.y = 10 + Math.sin(time) * 8;
//        camera.lookAt(body.position);
//      }
//    */

//     group.rotation.y -= .025;





//     //*********************************** render color and depth maps
//     renderer.autoClear = false;
//     renderer.autoUpdateObjects = true;
//     renderer.shadowMapEnabled = true;
//     depthPassPlugin.enabled = true;

//     renderer.render(scene, camera, composer.renderTarget2, true);

//     renderer.shadowMapEnabled = false;
//     depthPassPlugin.enabled = false;

//     // do postprocessing
//     composer.render(0.1);
//     controls2.update();



// }
// animate();

// camera.position.z = 22;
// camera.position.y = 10;
// camera.position.x = -15;

