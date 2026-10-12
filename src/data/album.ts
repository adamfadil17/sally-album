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
        src: ph(1),
        alt: "Pertemuan pertama",
        caption:
          "Pertemuan yang sederhana, tapi diam-diam kuingat sampai hari ini.",
      },
      {
        src: ph(2),
        alt: "Obrolan pertama",
        caption:
          "Obrolan yang tak sengaja panjang, seperti sore yang enggan pulang.",
      },
      {
        src: ph(3),
        alt: "Tawa pertama",
        caption: "Tawamu, yang pertama kali kudengar dari dekat.",
      },
      {
        src: ph(4),
        alt: "Mulai nyaman",
        caption: "Dari canggung, pelan-pelan menjadi nyaman.",
      },
    ],
  },
  {
    title: "Hari-hari Kecil",
    photos: [
      {
        src: ph(5),
        alt: "Makan bersama",
        caption: "Meja makan yang sama, cerita yang tak pernah habis.",
      },
      {
        src: ph(6),
        alt: "Jalan sore",
        caption: "Berjalan tanpa tujuan, tapi selalu terasa tepat.",
      },
      {
        src: ph(7),
        alt: "Momen santai",
        caption: "Hal-hal biasa jadi istimewa kalau ada kamu.",
      },
    ],
  },
  {
    title: "Tempat yang Kita Singgahi",
    photos: [
      {
        src: ph(8),
        alt: "Perjalanan 1",
        caption: "Peta boleh berubah, kita tetap searah.",
      },
      {
        src: ph(9),
        alt: "Perjalanan 2",
        caption: "Langit hari itu luas, tapi genggamanmu lebih menenangkan.",
      },
      {
        src: ph(10),
        alt: "Perjalanan 3",
        caption: "Setiap kota punya cerita, dan kamu ada di semuanya.",
      },
      {
        src: ph(11),
        alt: "Perjalanan 4",
        caption: "Lelah di jalan terasa ringan karena ditemani.",
      },
    ],
  },
  {
    title: "Terima Kasih, Sally",
    photos: [
      {
        src: ph(12),
        alt: "Bersyukur 1",
        caption:
          "Terima kasih sudah tinggal, bahkan di hari-hari yang tidak mudah.",
      },
      {
        src: ph(13),
        alt: "Bersyukur 2",
        caption: "Kamu sabar pada versi diriku yang masih belajar.",
      },
      {
        src: ph(14),
        alt: "Bersyukur 3",
        caption: "Aku bersyukur Tuhan mempertemukan kita.",
      },
    ],
  },
  {
    title: "Tumbuh Bersama",
    photos: [
      {
        src: ph(15),
        alt: "Tumbuh 1",
        caption: "Kita bertumbuh, tidak selalu cepat, tapi selalu bersama.",
      },
      {
        src: ph(16),
        alt: "Tumbuh 2",
        caption: "Mimpi-mimpi kecil yang kita jaga diam-diam.",
      },
      {
        src: ph(17),
        alt: "Tumbuh 3",
        caption: "Rumah bukan hanya tempat, kadang ia adalah kamu.",
      },
      {
        src: ph(18),
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
    title: "Selamat ulang tahun, Sally",
    photos: [
      {
        src: ph(19),
        alt: "Ulang tahun 1",
        caption: "Kamu, yang membuat hari terasa lebih ringan.",
      },
      {
        src: ph(20),
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
        src: ph(21),
        alt: "Doa 1",
        caption: "Tetaplah bersinar dengan caramu sendiri.",
      },
      {
        src: ph(22),
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
    title: "Terima kasih, Sally",
    photos: [
      {
        src: ph(23),
        alt: "Terima kasih 1",
        caption: "Tempat paling tenang untuk pulang.",
      },
      {
        src: ph(24),
        alt: "Terima kasih 2",
        caption: "Untuk halaman-halaman yang belum kita tulis.",
      },
    ],
    text: [
      "Terima kasih sudah sabar, hangat, dan tetap tinggal. Apa pun halaman berikutnya, aku ingin tetap ada di sampingmu.",
    ],
    signature: "Dengan sayang, Adam",
  },
];
