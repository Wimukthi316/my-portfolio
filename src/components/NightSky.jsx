import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const NightSky = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Improve rendering quality
    mountRef.current.appendChild(renderer.domElement);

    // Handle Resize
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Create Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      transparent: true,
      opacity: 0.8,
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
      starVertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
    }

    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 1;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.x += 0.0005;
      starField.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ overflow: "hidden" }}
    ></div>
  );
};

export default NightSky;
