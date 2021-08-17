import React from "react";
import useFullscreenStatus from "../hook/useFullscreenStatus";

const Fullscreen = () => {
  /** BEGIN:: fullscreen manage */
  const maximizableElement = React.useRef(null); // per il fullscreen
  let isFullscreen, setIsFullscreen;
  let errorMessage;

  try {
    [isFullscreen, setIsFullscreen] = useFullscreenStatus(maximizableElement);
  } catch (e) {
    errorMessage = true;
    isFullscreen = false;
    setIsFullscreen = undefined;
  }
  const handleExitFullscreen = () => {
    try {
      document.exitFullscreen();
    } catch {
      /** gestione bug safari */
      document.webkitExitFullscreen();
    }
  };

  /** END:: fullscreen manage*/

  return (
    <div className="flexyContainer" ref={maximizableElement}>
      <div
        id="fullscreenIcon"
        onClick={() => {
          isFullscreen ? handleExitFullscreen() : setIsFullscreen(true);
        }}
      >
        <img
          src={"../assets/img/fullscreen.svg"}
          alt="fullscreen icon"
          title="fullscreen icon"
          className={isFullscreen ? "compress" : "maximize"}
        />
      </div>
      <div>I'm {isFullscreen ? "" : "not"} a full screen page</div>
    </div>
  );
};

export default Fullscreen;
