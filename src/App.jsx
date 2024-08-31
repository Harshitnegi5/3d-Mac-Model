import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="navbar line fixed top-0 pt-10 pb-3 flex gap-10 left-1/2 -translate-x-1/2  ">
        {[
          "iphone",
          "ipad",
          "services",
          "ios",
          "product",
          "iphone",
          "ipad",
          "services",
          "ios",
          "product",
        ].map((e) => (
          <a href="" className="text-white font-['poppins'] text-sm capitalize">
            {e}
          </a>
        ))}
      </div>
      <div className=" text-white absolute top-20 left-1/2 -translate-x-1/2">
        <h3 className=" masked text-7xl font-[700] tracking-tighter font-['poppins']">
          macbook pro.
        </h3>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
