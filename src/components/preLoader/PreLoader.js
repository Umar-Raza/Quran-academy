import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
export default function PreLoader() {
  return (
    <div className="preLoader  ">
      <lottie-player
        src="https://lottie.host/6f55e691-2e4d-47a2-9e5b-d75bb7adc1ba/VdODGMw1no.json"
        background="transparent"
        speed="1"
        style={{ width: "500px", height: "500pxs" }}
        direction="1"
        mode="bounce"
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}
