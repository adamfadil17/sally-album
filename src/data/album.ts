export type Photo = { src: string; alt: string; caption: string };
export type AlbumPage = { title: string; photos: Photo[] };

// Ganti dengan ID video YouTube "Ardhito Pramono - Bitterlove"
// (bagian setelah ?v= pada URL, mis. youtube.com/watch?v=XXXXXXXXXXX)
export const YOUTUBE_VIDEO_ID = "lbYc76YluJQ";

// Placeholder: ganti src dengan "/photos/nama-file.jpg" (taruh di folder /public/photos)
const ph = (n: number) =>
  `https://placehold.co/800x800/F3DCD8/9C6B6F?text=Foto+${n}`;

export const cover = {
  title: "Kita, di Antara Waktu",
  subtitle: "Sebuah album untuk Sally Azalia",
  from: "from Fadil",
};

export const album: AlbumPage[] = [
  {
    title: "Mula-mula",
    photos: [
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791810895/WhatsApp_Image_2026-10-12_at_20.07.25_f6kxmm.jpg",
        alt: "Pertemuan pertama",
        caption:
          "Pertemuan yang sederhana, tapi diam-diam kuingat sampai hari ini.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791808828/WhatsApp_Image_2026-02-22_at_22.42.30_iaqzub.jpg",
        alt: "Obrolan pertama",
        caption:
          "Obrolan yang tak sengaja panjang, seperti sore yang enggan pulang.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791808804/WhatsApp_Image_2025-09-18_at_05.59.07_5dffe055_apyi85.jpg",
        alt: "Tawa pertama",
        caption: "Tawamu, yang pertama kali kudengar dari dekat.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791810083/Gemini_Generated_Image_do0pfido0pfido0p_r7pjmz.jpg",
        alt: "Mulai nyaman",
        caption: "Dari canggung, pelan-pelan menjadi nyaman.",
      },
    ],
  },
  {
    title: "Hari-hari Kecil",
    photos: [
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791808877/WhatsApp_Image_2026-02-24_at_23.52.01_vflrs6.jpg",
        alt: "Makan bersama",
        caption: "Meja makan yang sama, cerita yang tak pernah habis.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791808877/WhatsApp_Image_2026-02-24_at_23.52.00_jiwoxk.jpg",
        alt: "Jalan sore",
        caption: "Berjalan tanpa tujuan, tapi selalu terasa tepat.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791811048/WhatsApp_Image_2026-02-24_at_23.52.44_h1hpl8.jpg",
        alt: "Momen santai",
        caption: "Hal-hal biasa jadi istimewa kalau ada kamu.",
      },
    ],
  },
  {
    title: "Tempat yang Kita Singgahi",
    photos: [
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791810209/WhatsApp_Image_2026-04-19_at_00.09.14_dxle8d.jpg",
        alt: "Perjalanan 1",
        caption: "Peta boleh berubah, kita tetap searah.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791811382/WhatsApp_Image_2026-10-12_at_20.08.59_oqy415.jpg",
        alt: "Perjalanan 2",
        caption: "Langit hari itu luas, tapi genggamanmu lebih menenangkan.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791810151/WhatsApp_Image_2026-04-15_at_22.19.16_n7tgyc.jpg",
        alt: "Perjalanan 3",
        caption: "Setiap kota punya cerita, dan kamu ada di semuanya.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791812228/WhatsApp_Image_2026-04-19_at_00.09.16_y67lpe.jpg",
        alt: "Perjalanan 4",
        caption: "Lelah di jalan terasa ringan karena ditemani.",
      },
    ],
  },
  {
    title: "Terima Kasih, Sally",
    photos: [
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791810186/WhatsApp_Image_2026-04-19_at_00.08.09_nhkple.jpg",
        alt: "Bersyukur 1",
        caption:
          "Terima kasih sudah tinggal, bahkan di hari-hari yang tidak mudah.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791810272/album3_y1lk6i.jpg",
        alt: "Bersyukur 2",
        caption: "Kamu sabar pada versi diriku yang masih belajar.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791810270/album1_gpqc5j.jpg",
        alt: "Bersyukur 3",
        caption: "Aku bersyukur Tuhan mempertemukan kita.",
      },
    ],
  },
  {
    title: "Tumbuh Bersama",
    photos: [
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791809010/WhatsApp_Image_2026-07-19_at_20.33.21_mbblgr.jpg",
        alt: "Tumbuh 1",
        caption: "Kita bertumbuh, tidak selalu cepat, tapi selalu bersama.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791811656/AE4E838E-67AF-41B8-8045-4FD2D734CBA5_nnqmfn.jpg",
        alt: "Tumbuh 2",
        caption: "Mimpi-mimpi kecil yang kita jaga diam-diam.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791811755/Gemini_Generated_Image_iufqkciufqkciufq_gafnyn.png",
        alt: "Tumbuh 3",
        caption: "Rumah bukan hanya tempat, kadang ia adalah kamu.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791810814/WhatsApp_Image_2026-07-03_at_06.15.31_mqwxh9.jpg",
        alt: "Tumbuh 4",
        caption: "Halaman ini belum selesai, masih banyak yang ingin kutulis.",
      },
    ],
  },
];

export type FinalePage = {
  layout: "a" | "b" | "c";
  title: string;
  age?: string;
  photos: [Photo, Photo];
  text: string[];
  signature?: string;
};

// 3 halaman ucapan ulang tahun, masing-masing dengan layout berbeda
export const finale: FinalePage[] = [
  {
    layout: "a",
    age: "21",
    title: "Selamat ulang tahun, Sally Azalia",
    photos: [
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791809013/WhatsApp_Image_2026-10-07_at_13.50.59_vpngqq.jpg",
        alt: "Ulang tahun 1",
        caption: "Kamu, yang membuat hari terasa lebih ringan.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791809016/WhatsApp_Image_2026-02-27_at_19.52.48_tiyqsj.jpg",
        alt: "Ulang tahun 2",
        caption: "Satu tahun lagi, satu cerita lagi.",
      },
    ],
    text: [
      "Hari ini kamu genap dua puluh satu. Aku bersyukur bisa jadi salah satu orang yang ikut merayakannya.",
    ],
  },
  {
    layout: "b",
    title: "Doa dari aku",
    photos: [
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791809011/WhatsApp_Image_2026-09-29_at_10.14.53_xpkaiv.jpg",
        alt: "Doa 1",
        caption: "Tetaplah bersinar dengan caramu sendiri.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791809012/WhatsApp_Image_2026-09-29_at_12.36.17_qsgqz0.jpg",
        alt: "Doa 2",
        caption: "Kamu pantas mendapatkan hal-hal baik.",
      },
    ],
    text: [
      "Semoga langkahmu selalu dipertemukan dengan hal-hal baik, dan lelahmu selalu ada yang menemani.",
      "Semoga mimpi-mimpimu, kecil maupun besar, pelan-pelan menemukan jalannya.",
    ],
  },
  {
    layout: "c",
    title: "Terima kasih, Sally Azalia",
    photos: [
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791809011/WhatsApp_Image_2026-09-06_at_23.07.46_f8nvkb.jpg",
        alt: "Terima kasih 1",
        caption: "Tempat paling tenang untuk pulang.",
      },
      {
        src: "https://res.cloudinary.com/dzerxindp/image/upload/v1791809008/WhatsApp_Image_2026-05-16_at_06.47.48_vguq7y.jpg",
        alt: "Terima kasih 2",
        caption: "Untuk halaman-halaman yang belum kita tulis.",
      },
    ],
    text: [
      "Terima kasih sudah sabar, hangat, dan tetap tinggal. Apa pun halaman berikutnya, aku ingin tetap ada di sampingmu.",
    ],
    signature: "With Love, Fadil",
  },
];
