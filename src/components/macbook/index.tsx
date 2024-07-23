"use client";

import React from "react";
import style from "./style.module.scss";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import MacbookModel from "./Macbook";

const MacbookView = () => {
  return (
    <div className={style.macbookView}>
      <Canvas>
        <OrbitControls
          minPolarAngle={Math.PI / 100} // Giới hạn góc xoay tối thiểu theo trục y
          maxPolarAngle={Math.PI / 2} // Giới hạn góc xoay tối đa theo trục y
          minAzimuthAngle={-Math.PI / 2} // Giới hạn góc xoay tối thiểu theo trục x
          maxAzimuthAngle={Math.PI / 2} // Giới hạn góc xoay tối đa theo trục x
          rotateSpeed={0.8}
        />
        {/* <PresentationControls global polar={[0, 0.9]} azimuth={[-0.5, 0.5]}> */}
        <group scale={0.7}>
          <Html
            wrapperClass={style.macbookIframe}
            position={[0, 0.35, -2.27]}
            transform
            distanceFactor={1.2}
            rotation={[-0.35, 0, 0]}
            scale={1.07}
          >
            <iframe src="https://trungkhai.vercel.app/"></iframe>
          </Html>
          <MacbookModel
            position={[0, -1.2, 0]}
            // rotation={[0, 0.7, 0]}
            scale={14}
          />
        </group>
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.5}
          scale={15}
          blur={1}
          far={10}
          resolution={256}
          color={"#000000"}
        />
        <Environment preset="warehouse" />
        {/* </PresentationControls> */}
        <ambientLight intensity={0} />
      </Canvas>
    </div>
  );
};

export default MacbookView;
