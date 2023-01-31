export const calculatePlaybackDuration = ({
  duration,
  speed,
}: {
  duration: number;
  speed: number;
}) => {
  const totalSeconds = duration / speed;

  let minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const hours = Math.floor(minutes / 60);
  minutes = Math.floor(minutes % 60);

  return {
    hours,
    minutes,
    seconds,
  };
};
