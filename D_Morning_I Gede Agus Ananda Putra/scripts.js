window.addEventListener('scroll', function () {
  const navbar = document.querySelector('header');
  const scrollPos = window.scrollY;

  if (scrollPos > 50) {
    navbar.style.backgroundColor = '#050316'; /* Ganti warna saat di-scroll */
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)'; /* Kembalikan transparansi saat di-scroll ke atas */
  }
});
