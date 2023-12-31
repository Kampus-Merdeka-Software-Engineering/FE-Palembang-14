let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const visibleSlides = 5; // Jumlah slide yang akan ditampilkan pada suatu waktu

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none'; // Semua slide disembunyikan
  });

  for (let i = index; i < index + visibleSlides; i++) {
    if (i < slideCount) {
      slides[i].style.display = 'block'; // Menampilkan 5 slide berikutnya atau kurang
    }
  }
}

function nextSlide() {
  if (currentSlide + visibleSlides < slideCount) {
    currentSlide += 1;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide -= 1;
    showSlide(currentSlide);
  }
}

// check dia klo null atau ga

if (prevButton != null) {
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
}

// Menampilkan 5 slide pertama saat halaman dimuat
showSlide(currentSlide);


// manggil data book
async function getBookData() {
  try {
    const response = await fetch('http://localhost:3000/books');
    if (!response.ok) {
      throw new Error('Gagal mengambil data buku');
    }
    const books = await response.json();
    console.log(books);
  } catch (error) {
    console.error(error.message);
  }
}




