import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevData) => !prevData);

    if (playVideo) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  };
  

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={vidRef}
        type='vidoe/mp4'
        loop
        controls={false}
        muted
      />

      <div className='app__video-overlay flex__center'>
        <div
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsFillPlayFill color='#fff' fontSize={30} />
          ) : (
            <BsPauseFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
