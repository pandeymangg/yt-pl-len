export type TTheme = "light" | "dark";
export interface IThumbailsResponse {
  default?: IThumbnail | null;
  medium?: IThumbnail | null;
  high?: IThumbnail | null;
  standard?: IThumbnail | null;
  maxres?: IThumbnail | null;
}

export interface IThumbnail {
  url?: string | null;
  width?: number | null;
  height?: number | null;
}
