import { type NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { api } from "../utils/api";
import CalculateForm from "components/CalculateForm";
import PlaylistInfo from "components/PlaylistInfo";

const Home: NextPage = () => {
  const {
    mutate: calculateDurationMutation,
    data,
    isLoading,
    isSuccess,
    isError,
  } = api.calculate.calculate.useMutation();

  const [playlistLink, setPlaylistLink] = useState("");

  const playlistId = useMemo(() => {
    const id = playlistLink.split("?");
    const urlParams = new URLSearchParams(id[1]);
    const list = urlParams.get("list");

    return list || playlistLink;
  }, [playlistLink]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateDurationMutation({ playlistId });
  };

  return (
    <>
      <Head>
        <title>YouTube Playlist Length</title>
        <meta
          name="description"
          content="Web app to calculate the length of a YouTube Playlist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <div>
          <CalculateForm
            playlistLink={playlistLink}
            setPlaylistLink={setPlaylistLink}
            onSubmit={handleSubmit}
          />

          <PlaylistInfo
            isError={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
            duration={data?.data?.duration ?? 0}
            numberOfVideos={data?.data?.numberOfVideos ?? 0}
            title={data?.data?.title ?? ""}
            thumbs={data?.data?.thumbs}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
