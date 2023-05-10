import React from "react";
import letter from '../assets/images/LetterA.jpg'

function Home() {
  return (
    <div>
      <model-viewer
        src={letter}
        alt="3D Letter A"
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-placement="floor"
        ar-scale="fixed"
        ar-auto-rotate
        style={{ width: "100%", height: "100vh" }}
      ></model-viewer>
    </div>
  );
}

export default Home;
