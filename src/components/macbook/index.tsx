"use client";

import React from "react";
import style from "./style.module.scss";
import { Canvas } from "@react-three/fiber";
import {
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
        {/* <OrbitControls /> */}
        <PresentationControls global polar={[0, 0.9]} azimuth={[-0.5, 0.5]}>
          <group scale={0.7}>
            <Html
              wrapperClass={style.macbookIframe}
              position={[0, 0.3, -2.3]}
              transform
              distanceFactor={1.2}
              rotation={[-0.34, 0, 0]}
              scale={1.085}
            >
              <iframe src="https://trungkhai.vercel.app/"></iframe>
            </Html>
            <MacbookModel
              position={[0, -1.2, 0]}
              // rotation={[0, 0.7, 0]}
              scale={14}
            />
          </group>
          <Environment preset="warehouse" />
        </PresentationControls>
        <ambientLight intensity={0} />
      </Canvas>
    </div>
  );
};

export default MacbookView;
