const passwordForm = document.getElementById("passwordForm");
const passwordContainer = document.querySelector(".password-container");
const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelector(".slides");
const audio = document.getElementById("myAudio"); // Mengambil elemen audio
const lyricsContainer = document.querySelector(".lyrics-container");
const lyricsElement = document.querySelector(".lyrics");

let moveSlides = 0;
const slideWidth = 100 / 4; // Lebar setiap slide (4 foto)

// Array dengan informasi waktu dan teks lirik
const lyricsData = [
  { time: 9, text: "Moon, a hole of light" },
  { time: 12, text: "through the big top tent up high" },
  { time: 17, text: "Here before and after me" },
  { time: 21, text: "shining" },
  { time: 23, text: "down on me" },
  { time: 26, text: "Moon, tell me if I could" },
  { time: 29, text: "send up my heart to you" },
  { time: 33, text: "So, when I die, which I must do" },
  { time: 37, text: "could it shine down here with you?" },
  { time: 42, text: "'Cause my love is mine, all mine" },
  { time: 46, text: "I love, my, my, mine" },
  { time: 50, text: "Nothing in the world belongs to me" },
  { time: 54, text: "but my love, mine, all mine, all mine" },
  { time: 79, text: "My baby here on Earth" },
  { time: 82, text: "showed me what my heart was worth" },
  { time: 86, text: "So, when it comes to be my turn" },
  { time: 90, text: "could you shine it" },
  { time: 92, text: "down here for her?" },
  { time: 94, text: "'Cause my love is mine, all mine" },
  { time: 99, text: "I love, my, my, mine" },
  { time: 103, text: "Nothing in the world belongs to me" },
  { time: 107, text: "but my love, mine, all mine" },
  { time: 112, text: "Nothing in the world is mine for free" },
  { time: 115, text: "but my love, mine, all mine, all mine" },
];

function displayLyrics() {
  let time = Math.floor(audio.currentTime); // Waktu audio saat ini

  // Cari teks lirik yang sesuai dengan waktu audio saat ini
  const currentLyric = lyricsData.find((lyric) => lyric.time === time);

  // Jika ada lirik yang cocok dengan waktu saat ini, tampilkan lirik
  if (currentLyric) {
    lyricsElement.textContent = currentLyric.text;
  }
}

audio.addEventListener("timeupdate", displayLyrics);

passwordForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const passwordInput = document.getElementById("password").value;

  if (passwordInput === "bibubganteng") {
    passwordContainer.style.transition = "transform 1s ease";
    passwordContainer.style.transform = "translateX(-100%)";

    setTimeout(() => {
      passwordContainer.style.display = "none";
      slides.style.transition = "transform 3s ease";
      slides.style.transform = "translateX(-100%)";

      setInterval(move, 3000); // Bergerak setiap 3 detik
      audio.play(); // Memulai pemutaran lagu
      lyricsContainer.style.display = "block"; // Tampilkan kontainer lirik setelah slideshow dimulai
    }, 1000);
  } else {
    alert("Password salah!");
  }
});

function move() {
  moveSlides -= slideWidth; // Menggeser satu slide (4 foto) setiap kali ke kanan
  slides.style.transform = `translateX(${moveSlides}vw)`; // Perpindahan ke kanan

  /*if (moveSlides % (slideWidth * slides.childElementCount) === 0) {
    slides.style.transition = "none"; // Hilangkan efek transisi
    moveSlides = 0; // Kembali ke awal setelah mencapai slide terakhir
    slides.style.transform = `translateX(${moveSlides}vw)`; // Kembali ke posisi awal secara langsung

    // Tunggu sebentar sebelum mengaktifkan kembali efek transisi
    setTimeout(() => {
      slides.style.transition = "transform 3s ease"; // Setel kembali efek transisi
    }, 100);
  } */
}
