const alertBtn = document.getElementById('greet-btn');

const newAlert = () => alert('Happy new year from WWA! :)');

alertBtn.addEventListener('click', newAlert, true);
