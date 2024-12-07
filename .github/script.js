// script.js
document.getElementById('print-btn').addEventListener('click', () => {
  // Optionally, hide the button before printing
  const printButton = document.getElementById('print-btn');
  printButton.style.display = 'none';

  // Trigger print
  window.print();

  // Restore the button after printing
  printButton.style.display = 'block';
});
