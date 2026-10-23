/* A homepage link can open a specific demo without changing your original script. */
document.addEventListener('DOMContentLoaded', function () {
  if (new URLSearchParams(window.location.search).get('java') === '2') {
    JAVApag2();
  }
});
