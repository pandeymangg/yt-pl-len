import React from "react";
import PlaybackInfo from "./PlaybackInfo";

interface IPlaylistInfoProps {
  duration: number;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  numberOfVideos: number;
  title: string;
}

const PlaylistInfo = (props: IPlaylistInfoProps) => {
  const { duration, isError, isLoading, isSuccess, numberOfVideos, title } =
    props;

  const ConditionalComponent = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error</div>;
    }

    if (isSuccess) {
      return (
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </div>
          <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
            {numberOfVideos} videos in total
          </div>
          {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
            <PlaybackInfo key={speed} duration={duration} speed={speed} />
          ))}
        </div>
      );
    }

    return <div>Enter the link to a YouTube playlist to get started.</div>;
  };

  return (
    <div className="z-50 flex w-full justify-center pt-12">
      <div className="w-full rounded-lg border-[3px] border-[#333] bg-[#fafafa] p-4 text-gray-900 dark:bg-[#181818] dark:text-gray-100 dark:shadow-white">
        <ConditionalComponent />
      </div>
    </div>
  );
};

export default PlaylistInfo;
