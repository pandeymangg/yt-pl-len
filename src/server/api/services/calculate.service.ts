import { google } from "googleapis";
import { IThumbailsResponse } from "types/utils.types";

export const calculateDuration = async (
  {
    playlistId,
  }: {
    playlistId: string;
  } = {
    playlistId: "",
  }
) => {
  const api_key = process.env.YOUTUBE_API_KEY;
  let videoIds: string[] = [];

  const hourRegex = /(\d+)H/g;
  const minuteRegex = /(\d+)M/g;
  const secondRegex = /(\d+)S/g;

  let nextPageToken = "";
  let durationSeconds = 0;
  let totalSeconds = 0;
  let length = 0;
  let title = "";
  let channelTitle = "";
  let description = "";

  const youtube = google.youtube("v3");

  const playlistInfo = await youtube.playlists.list({
    key: api_key,
    part: ["snippet"],
    id: [playlistId],
  });

  title = playlistInfo?.data?.items?.[0]?.snippet?.title ?? "";
  channelTitle = playlistInfo?.data?.items?.[0]?.snippet?.channelTitle ?? "";
  description = playlistInfo?.data?.items?.[0]?.snippet?.description ?? "";

  const thumbs: IThumbailsResponse =
    playlistInfo?.data?.items?.[0]?.snippet?.thumbnails ?? {};

  while (true) {
    const playlistItems = await youtube.playlistItems.list({
      key: api_key,
      part: ["contentDetails", "snippet"],
      playlistId,
      maxResults: 50,
      pageToken: nextPageToken,
    });

    videoIds = [];

    playlistItems?.data?.items?.forEach((item) =>
      videoIds.push(item?.contentDetails?.videoId ?? "")
    );

    length += videoIds.length;

    const playlistVideos = await youtube.videos.list({
      key: api_key,
      part: ["contentDetails"],
      id: videoIds,
    });

    playlistVideos?.data?.items?.forEach((item) => {
      const hour =
        item?.contentDetails?.duration
          ?.match(hourRegex)?.[0]
          ?.replace("H", "") || 0;
      const min =
        item?.contentDetails?.duration
          ?.match(minuteRegex)?.[0]
          ?.replace("M", "") || 0;
      const sec =
        item?.contentDetails?.duration
          ?.match(secondRegex)?.[0]
          ?.replace("S", "") || 0;

      durationSeconds =
        parseInt(hour.toString(), 10) * 3600 +
        parseInt(min.toString(), 10) * 60 +
        parseInt(sec.toString(), 10);

      totalSeconds += durationSeconds;
    });

    nextPageToken = playlistItems.data.nextPageToken ?? "";

    if (!nextPageToken) {
      break;
    }
  }

  let minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const hours = Math.floor(minutes / 60);
  minutes = Math.floor(minutes % 60);

  return {
    status: "success",
    data: {
      numberOfVideos: length,
      title: title,
      description: description,
      channelTitle: channelTitle,
      duration: Math.floor(totalSeconds),
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      thumbs,
    },
  };
};
