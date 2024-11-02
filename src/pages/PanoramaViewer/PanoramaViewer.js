import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './PanoramaViewer.css';

function PanoramaViewer() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if PANOLENS is loaded
    if (!window.PANOLENS) {
      console.error("Panolens library is not loaded");
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const panorama = new window.PANOLENS.ImagePanorama('path/to/your/image.jpg');
    const viewer = new window.PANOLENS.Viewer({ container: containerRef.current });
    viewer.add(panorama);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return React.createElement(
    'div',
    { className: 'PanoramaViewer' },
    React.createElement('div', { ref: containerRef, className: 'image-container' })
  );
}

export default PanoramaViewer;