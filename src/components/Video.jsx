import React, { useEffect } from "react";
import { usePageVisibility } from "../hook/usePageVisibility";

const Video = () => {
  /** Check visibility page. */
  const isVisibleTab = usePageVisibility();
  useEffect(() => {
    if (isVisibleTab) document.getElementById("video").play();
    else {
      document.getElementById("video").pause();
    }
  }, [isVisibleTab]);

  return (
    <video
      id="video"
      controls="controls"
      preload="none"
      style={{ width: "100%", height: "100%" }}
      /*poster="https://...poster.png"*/
    >
      <source
        id="mp4"
        src="http://media.w3.org/2010/05/sintel/trailer.mp4"
        type="video/mp4"
      />
      <source
        id="webm"
        src="http://media.w3.org/2010/05/sintel/trailer.webm"
        type="video/webm"
      />
      <source
        id="ogv"
        src="http://media.w3.org/2010/05/sintel/trailer.ogv"
        type="video/ogg"
      />
      {/*
       Track to be used for accessibility using the VTT standard.
        See https://www.html5rocks.com/en/tutorials/track/basics/ for more information on how to use text tracks
      */}
      <track
        kind="subtitles"
        label="English subtitles"
        src="subtitles_en.vtt"
        srclang="en"
        default
      ></track>
      {/*
        We can also add more than one text track and let the user choose which one to play. There is now way to
        currently do this with the built in controls so it'll have to be scripted
        */}
      <track
        kind="subtitles"
        label="Deutsche Untertitel"
        src="subtitles_de.vtt"
        srclang="de"
      ></track>

      <p>Your user agent does not support the HTML5 Video element.</p>
    </video>
  );
};

export default Video;
