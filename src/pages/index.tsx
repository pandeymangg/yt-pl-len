import { type NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { api } from "../utils/api";
import { useTheme } from "../hooks/useTheme";
import PlaybackInfo from "../components/PlaybackInfo";

const Home: NextPage = () => {
  const {
    mutate: calculateDurationMutation,
    data,
    isLoading,
    isSuccess,
  } = api.calculate.calculate.useMutation();

  const [playlistLink, setPlaylistLink] = useState("");

  const playlistId = useMemo(() => {
    const id = playlistLink.split("?");
    const urlParams = new URLSearchParams(id[1]);
    const list = urlParams.get("list");

    return list || playlistLink;
  }, [playlistLink]);

  const { setTheme } = useTheme();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateDurationMutation({ playlistId });
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-bgLight dark:bg-bgDark">
        <div>
          <button
            onClick={() =>
              setTheme((prev) => (prev === "dark" ? "light" : "dark"))
            }
          >
            Change Theme
          </button>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              value={playlistLink}
              className="border border-gray-700 p-2"
              onChange={(e) => setPlaylistLink(e.target.value)}
            />

            <button type="submit" className="border border-teal-700">
              Submit
            </button>

            <div>
              {isLoading && <div>Loading...</div>}
              {isSuccess && (
                <div className="flex flex-col">
                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                    <PlaybackInfo
                      key={speed}
                      duration={data.data.duration}
                      speed={speed}
                    />
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
