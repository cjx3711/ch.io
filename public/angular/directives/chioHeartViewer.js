angular.module("chioHeartViewer", [])
	.directive(
		"chioHeartViewer",
		[function () {
			return {
				restrict: "E",
				scope: {
					// assimpUrl: "=assimpUrl"
				},
				link: function (scope, elem, attr) {
					var camera;
					var scene;
					var renderer;
					var parameters;
					var global_time;
					// init scene
					init();
					animate();

					function init() {

						camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 10000 );
						camera.position.z = 70;
						scene = new THREE.Scene();
						scene.add(camera)
						// renderer = new THREE.WebGLRenderer()
						renderer = new THREE.WebGLRenderer({ alpha: true })
					    // renderer.setClearColor(0x333333)
						renderer.setPixelRatio( window.devicePixelRatio );
						// renderer.setSize(window.innerWidth, window.innerHeight);
						// container = angular.element('#container1');                                         
					    // container.append(renderer.domElement);
						elem[0].appendChild(renderer.domElement);
						// particles
					    // parameters = [ [ 0.0125, 0xe5e5e5, 1 ], [ 0.025, 0xe5e5e5, 1], [ 0.0375, 0xffffff, 0.75], [ 0.05, 0xffffff, 0.5], [ 0.0625, 0x000888, 0.8 ]]
					    parameters = [ [ 0.0275, 0xffffff, 2.5], [ 0.02750, 0xffffff, 1 ], [ 0.02750, 0xffffff, 1 ], [ 0.10, 0xffffff, 5 ]]

					    var PI2 = Math.PI * 2;

					    var texture = new THREE.ImageUtils.loadTexture( "../assets/circle.png" );

					    onWindowResize();

					   //  geometry = new THREE.SphereGeometry(15,80,20,0,2*Math.PI,Math.PI,Math.PI/2)

					   //  colors = [];
					   //  max = geometry.vertices.length - 1
					   //  for (i = 0; i< max; i++ ) {
					   //    colors[i] = new THREE.Color()
					   //    colors[i].setHSL(Math.random(),1,0.5)
					  	// }

					   //  geometry.colors = colors

					   //  material = new THREE.PointsMaterial({size:1, vertexColors: true, transparent: true, opacity:1})

					   //  mesh = new THREE.Points(geometry, material);
					   //  mesh.position.set(0,0,0);

					   //  geometry2 = new THREE.SphereGeometry(15,80,20,0,2*Math.PI,0,Math.PI/2);
					   //  geometry2.colors = colors;
					   //  vertices = mesh.geometry.vertices;
					   //  topmesh = new THREE.Points(geometry2,material);
					   //  topmesh.sortParticles = true;

					   //  scene.add(mesh)
					   //  scene.add(topmesh)

					   //  topmesh.scale.x = 1.1;
					   //  topmesh.scale.y = 1.1;
					   //  topmesh.scale.z = 1.1;
					   //  mesh.scale.x = 1.1;
					   //  mesh.scale.y = 1.1;
					   //  mesh.scale.z = 1.1;
					 //    console.log(texture);
						// group = new THREE.Group();
						// scene.add( group );
						// for ( var i = 0; i < 1000; i++ ) {
						// 	var material = new THREE.SpriteMaterial( {
						// 		color: 0xffffff,
						// 		map: texture
						// 	} );
						// 	particle = new THREE.Sprite( material );
						// 	particle.position.x = Math.random() * 2000 - 1000;
						// 	particle.position.y = Math.random() * 2000 - 1000;
						// 	particle.position.z = Math.random() * 2000 - 1000;
						// 	var d = 1 / Math.sqrt(Math.pow(particle.position.x, 2) + Math.pow(particle.position.y, 2) + Math.pow(particle.position.z, 2));
						// 	particle.position.x *= d;
						// 	// particle.position.y *= d;
						// 	// particle.position.z *= d;
						// 	particle.scale.x = particle.scale.y = Math.random() * 20 + 10;
						// 	group.add( particle );
						// }


					 //    parameters = [ [ 0.0325, 0xe5e5e5, 1, 10 ], [ 0.07, 0xe5e5e5, 1, 3 ]]
					    var geometry1 = new THREE.Geometry();

						var r = 450;
						var i, j

						var geometry1 = new THREE.SphereGeometry(800,10,5);
						for ( var i = 0 ; i < geometry1.vertices.length; i++ ) {
							geometry1.vertices[i].x += Math.random() * 50 - 25;
							geometry1.vertices[i].y += Math.random() * 50 - 25;
							geometry1.vertices[i].z += Math.random() * 50 - 25;
						}

						var geometry2 = new THREE.SphereGeometry(600,10,5);
						for ( var i = 0 ; i < geometry1.vertices.length; i++ ) {
							geometry1.vertices[i].x += Math.random() * 50 - 25;
							geometry1.vertices[i].y += Math.random() * 50 - 25;
							geometry1.vertices[i].z += Math.random() * 50 - 25;
						}
						// for (i = j = 1; j <= 60; i = ++j) {
						// 	var vertex1, vertex2;
						// 	vertex1 = new THREE.Vector3();
						// 	vertex1.x = Math.random() * 2 - 1;
						// 	vertex1.y = Math.random() * 2 - 1;
						// 	vertex1.z = Math.random() * 2 - 1;
						// 	vertex1.normalize();
						// 	vertex1.multiplyScalar(r);
						// 	vertex2 = vertex1.clone();
						// 	vertex2.multiplyScalar(1.5);
						// 	geometry1.vertices.push(vertex1);
						// 	geometry1.vertices.push(vertex2);
						// }
						var geometry0 = new THREE.SphereGeometry(500,10,5);
						for ( var i = 0 ; i < geometry0.vertices.length; i++ ) {
							geometry0.vertices[i].x += Math.random() * 50 - 25;
							geometry0.vertices[i].y += Math.random() * 50 - 25;
							geometry0.vertices[i].z += Math.random() * 50 - 25;
						}
						var objects = [];

						var i, j, line, material, p;
						var len = parameters.length - 1;

						for (i = 0; i < len; i++) {
							
							p = parameters[i];
							material = new THREE.PointsMaterial( {
								color: p[1],
								map: texture, 
								size: p[2],
								depthWrite: false
							} );
						// 	// particle = new THREE.Sprite( material );
						// 	// particle.position.x = Math.random() * 2000 - 1000;
						// 	// particle.position.y = Math.random() * 2000 - 1000;
						// 	// particle.position.z = Math.random() * 2000 - 1000;
						// 	// particle.scale.x = particle.scale.y = particle.scale.z = p[0];
						// 	// particle.originalScale = p[0];
						// 	// particle.rotation.y = Math.random() * Math.PI;
						// 	// particle.rotation.y = Math.random() * Math.PI;
							if (i == 0) {

							line = new THREE.Points(geometry0, material);
							} else if (i == 1 ) {

							line = new THREE.Points(geometry1, material);
							} else {
								line = new THREE.Points(geometry2, material);
							}
							line.scale.x = line.scale.y = line.scale.z = p[0];
							line.originalScale = p[0];
							line.rotation.y = Math.random() * Math.PI;
							line.updateMatrix();
							scene.add(line);
							objects.push(line);
						}

						window.addEventListener( 'resize', onWindowResize, false );
					}

					//
					function onWindowResize(event) {

						var width = $(".brain").width();
						var aspect = 16 / 4;
						if ( window.innerWidth < 1000 ) {
							aspect = 16 / 5;
						}if ( window.innerWidth < 700 ) {
							aspect = 16 / 6;
						}
						renderer.setSize(width, width / aspect);
						camera.aspect = aspect;
						camera.updateProjectionMatrix();
					}


					function anim() {
						var i, object;
						i = 0;

						while (i < 3) {
							if (i !== 2) {
								object = scene.children[i];
								if (object instanceof THREE.Points) {
									object.scale.x = object.scale.y = object.scale.z = object.originalScale = parameters[i][0] ;
								}
							}
							i++;
						}
					};
											global_time = Date.now()

					// interval_time = 
					inter = setInterval(toggle, 100);

					var state = 1;

					function toggle() {
						if ( state == 12) {
							state = 1;
						} else {
							state++;
						}
					}

					function animate() {
						requestAnimationFrame( animate );
						var scaleval = Math.min(0.0002, (0.0002+ (0.00005/(Date.now() - global_time + 1))));
					    time = Date.now() * 0.00007;
					    i = 0;
					    // console.log("increasing")
					    // console.log(Date.now())
					    
					    
					    while (i < scene.children.length) {
					      var object = scene.children[i];
					      // console.log(i)
					      if (object instanceof THREE.Points) {
					      	if (i == 2)  {
					      		object.rotation.y = time * (i + 1);
					      		object.rotation.x = time * (i + 2);
					      	} else if(i == 0 || i == 3){
					      		object.rotation.y = time * -(i + 2);
					      		object.rotation.x = time * -(i + 1);
					      	}
					        else {
				        	  object.rotation.y = time * -(i + 0.1);


				        	  if (state == 1 || state == 3) {
					        	  if (object.scale.x < (parameters[i][0] + 0.005)) {
							          object.scale.x = object.scale.y = object.scale.z  += 0.0004
							      }
							  } else if (state == 2 || state == 4) {
					        	  if (object.scale.x > parameters[i][0]) {
							          object.scale.x = object.scale.y = object.scale.z  -= 0.0004
							      }
							  } 

				           // console.log(scaleval);
					        }
					      }
					      i++;
					    }
						
					    // bpm

						render();
					}

					//
					function render() {
						// var timer = Date.now() * 0.0005;
						// camera.position.x = Math.cos(timer) * 10;
						// camera.position.y = 4;
						// camera.position.z = Math.sin(timer) * 10;
						// camera.lookAt(new THREE.Vector3(0,0,0));
						renderer.render(scene, camera);
					}

				}
			}
		}
	]);