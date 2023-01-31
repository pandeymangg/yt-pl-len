import React from "react";
import { calculatePlaybackDuration } from "../utils/calculatePlaybackDuration";

interface IPlatybackInfoProps {
  duration: number;
  speed: number;
}

const PlaybackInfo = ({ speed, duration }: IPlatybackInfoProps) => {
  const { hours, minutes, seconds } = calculatePlaybackDuration({
    duration,
    speed,
  });

  return (
    <div className="flex items-center gap-2">
      <p className="text-black dark:text-white">Speed at {speed}x: </p>
      <p className="text-black dark:text-white">
        {hours} hours {minutes} minutes {seconds} seconds
      </p>
    </div>
  );
};

export default PlaybackInfo;
