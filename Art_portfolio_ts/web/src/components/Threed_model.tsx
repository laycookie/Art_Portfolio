import React, { useEffect } from 'react'

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

export default function Threed_model() {
  //three js
  useEffect(() => {
    //basic setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 12

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#canvas'),
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    renderer.setClearColor(0x000000, 0)
    //controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.target.set(0, 0, 0)

    //fbx loader
    const fbxLoader = new FBXLoader()
    fbxLoader.load('models/3dModdleOfTheBox.fbx', (object) => {
      object.traverse(function (child) {
        if (child.isMesh) {
          const texture = new THREE.TextureLoader().load(
            'models/pakage(12).png'
          )
          child.material.map = texture
          child.material.needsUpdate = true
        }
      })

      object.scale.set(0.01, 0.01, 0.01)
      object.rotation.y = 4.71
      scene.add(object)
    })
    //adding lights
    const light = new THREE.AmbientLight(0xffffff, 1)

    const pointLight1 = new THREE.PointLight(0xffffff, 0.15, 50)
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1, 50)
    pointLight1.position.set(5, 5, 5)
    pointLight2.position.set(-5, 0, -5)
    scene.add(pointLight1)
    scene.add(pointLight2)
    scene.add(light)

    //rendering
    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()

    renderer.render(scene, camera)
  }, [])
  return <canvas id="canvas">test</canvas>
}
