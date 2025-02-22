import setupNavbar from './menutoogle.js';


// MOSTRAT NABVAR
document.addEventListener('DOMContentLoaded', function () {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            setupNavbar(); // Configura el navbar después de cargarlo
        })
        .catch(error => console.error('Error al cargar el navbar:', error));
});