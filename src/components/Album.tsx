"use client";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { album, cover, finale, type Photo } from "@/data/album";
import MusicPlayer from "./MusicPlayer";
import Cake from "./Cake";

function Shot({ p }: { p: Photo }) {
  return (
    <figure className="shot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={p.src} alt={p.alt} loading="lazy" />
      <figcaption>{p.caption}</figcaption>
    </figure>
  );
}

type Leaf = { front: ReactNode; back: ReactNode | null };

export default function Album() {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  // Halaman isi: halaman album + penutup. Tiap lembar punya sisi depan (kanan) dan belakang (kiri).
  const pages: ReactNode[] = [
    ...album.map((page) => (
      <div key={page.title} className="spread">
        <h2 className="title">{page.title}</h2>
        <div className={`photos ${page.photos.length === 3 ? "three" : ""}`}>
          {page.photos.map((p) => (
            <figure key={p.src} className="shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} loading="lazy" />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    )),
    ...finale.map((f) => {
      const [p1, p2] = f.photos;
      if (f.layout === "a")
        return (
          <div key={f.title} className="fin fin-a">
            <Cake />
            <p className="age">{f.age}</p>
            <h2 className="title">{f.title}</h2>
            <div className="pair"><Shot p={p1} /><Shot p={p2} /></div>
            <p className="msg">{f.text[0]}</p>
          </div>
        );
      if (f.layout === "b")
        return (
          <div key={f.title} className="fin fin-b">
            <h2 className="title">{f.title}</h2>
            <div className="zig">
              <Shot p={p1} /><p className="msg">{f.text[0]}</p>
              <p className="msg">{f.text[1]}</p><Shot p={p2} />
            </div>
          </div>
        );
      return (
        <div key={f.title} className="fin fin-c">
          <h2 className="title">{f.title}</h2>
          <p className="msg">{f.text[0]}</p>
          <div className="pair lean"><Shot p={p1} /><Shot p={p2} /></div>
          <p className="sign">{f.signature}</p>
        </div>
      );
    }),
  ];

  const coverNode = (
    <div className="cover">
      <p className="cover-from">{cover.from}</p>
      <h1>{cover.title}</h1>
      <p className="cover-sub">{cover.subtitle}</p>
      <button className="btn" onClick={() => next()}>Buka album</button>
    </div>
  );

  const leaves: Leaf[] = [{ front: coverNode, back: pages[0] }];
  for (let k = 1; 2 * k - 1 < pages.length; k++) {
    leaves.push({ front: pages[2 * k - 1], back: pages[2 * k] ?? null });
  }
  const last = leaves.length - 1; // lembar terakhir tidak dibalik

  const next = useCallback(() => { setStarted(true); setIndex((i) => Math.min(i + 1, last)); }, [last]);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <main className="stage">
      <div className={`book ${index === 0 ? "closed" : ""}`}>
        {leaves.map((leaf, i) => (
          <article
            key={i}
            className={`leaf ${i < index ? "flipped" : ""} ${i === index ? "current" : ""}`}
            style={{ zIndex: i < index ? i : leaves.length - i }}
            aria-hidden={i !== index && i !== index - 1}
          >
            <div className={`face front ${i === 0 ? "cover-face" : ""}`}>{leaf.front}</div>
            <div className="face back">{leaf.back}</div>
          </article>
        ))}
      </div>
      <nav className="nav" aria-label="Navigasi album">
        <button className="btn" onClick={prev} disabled={index === 0}>Sebelumnya</button>
        <span className="count">{index === 0 ? "Sampul" : `${index} / ${last}`}</span>
        <button className="btn" onClick={next} disabled={index === last}>Berikutnya</button>
      </nav>
      <MusicPlayer play={started} />
    </main>
  );
}
