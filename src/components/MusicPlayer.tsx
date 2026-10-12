"use client";
import { useEffect, useRef, useState } from "react";
import { YOUTUBE_VIDEO_ID } from "@/data/album";

type YTPlayer = { playVideo: () => void; pauseVideo: () => void; destroy: () => void };
type YTNamespace = {
  Player: new (id: string, opts: {
    height: string; width: string; videoId: string;
    playerVars: Record<string, number | string>;
    events: { onReady: () => void };
  }) => YTPlayer;
};
declare global {
  interface Window { YT?: YTNamespace; onYouTubeIframeAPIReady?: () => void }
}

export default function MusicPlayer({ play }: { play: boolean }) {
  const player = useRef<YTPlayer | null>(null);
  const ready = useRef(false);
  const shouldPlay = useRef(false);
  const [on, setOn] = useState(true);

  useEffect(() => {
    if (!YOUTUBE_VIDEO_ID) return;
    const init = () => {
      if (!window.YT) return;
      player.current = new window.YT.Player("yt-player", {
        height: "1", width: "1", videoId: YOUTUBE_VIDEO_ID,
        playerVars: { loop: 1, playlist: YOUTUBE_VIDEO_ID, controls: 0 },
        events: { onReady: () => { ready.current = true; if (shouldPlay.current) player.current?.playVideo(); } },
      });
    };
    if (window.YT?.Player) init();
    else {
      const s = document.createElement("script");
      s.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(s);
      window.onYouTubeIframeAPIReady = init;
    }
    return () => { player.current?.destroy(); player.current = null; ready.current = false; };
  }, []);

  useEffect(() => {
    shouldPlay.current = play && on;
    if (!ready.current) return;
    if (shouldPlay.current) player.current?.playVideo();
    else player.current?.pauseVideo();
  }, [play, on]);

  return (
    <>
      <div className="yt-hidden" aria-hidden="true"><div id="yt-player" /></div>
      {play && YOUTUBE_VIDEO_ID && (
        <button className="music" onClick={() => setOn((v) => !v)} aria-pressed={on}>
          {on ? "Musik: nyala" : "Musik: mati"}
        </button>
      )}
    </>
  );
}
