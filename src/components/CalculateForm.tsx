import React from "react";
import type { FormEvent } from "react";

interface IProps {
  playlistLink: string;
  setPlaylistLink: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const CalculateForm: React.FC<IProps> = ({
  playlistLink,
  setPlaylistLink,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex w-full flex-col gap-4">
        <input
          className="rounded-lg border border-gray-900 bg-[#fafafa] px-4 py-2 text-gray-900 focus:border-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500 dark:border-gray-100 dark:bg-[#181818] dark:text-gray-100"
          type="text"
          placeholder="PlayList Link / Id"
          value={playlistLink}
          onChange={(e) => setPlaylistLink(e.target.value)}
        />
        <button
          type="submit"
          className="h-11 w-32 cursor-pointer rounded-lg bg-[#ff0000] font-medium text-white  hover:bg-red-600 active:scale-95"
          disabled={!playlistLink}
        >
          <span>Calculate</span>
        </button>
      </div>
    </form>
  );
};

export default CalculateForm;
