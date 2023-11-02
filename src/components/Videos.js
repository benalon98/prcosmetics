import React, { useState } from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Videos = ({ youtubeVideoIds }) => {
  const [autoplay, setAutoplay] = useState(true);
  const [sliderIndex, setSliderIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 5000,

    beforeChange: (current, next) => {
      // Pause autoplay when the slide changes
      if (autoplay) {
        setAutoplay(false);
      }
    },
    afterChange: (current) => {
      // Resume autoplay when the slide changes
      setSliderIndex(current);
      if (!autoplay) {
        setAutoplay(true);
      }
    },
  };

  return (
    <Slider {...settings}>
      {youtubeVideoIds.map((videoId, index) => (
        <div key={videoId} className="video-container">
          <YouTube
            style={{ padding: "30px" }}
            videoId={videoId}
            onPlay={() => {
              // Pause autoplay when the video is played
              if (autoplay) {
                setAutoplay(false);
              }
            }}
            onPause={() => {
              // Resume autoplay when the video is paused
              if (sliderIndex === index) {
                setAutoplay(true);
              }
            }}
            iframeClassName="video-testimonial"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Videos;
