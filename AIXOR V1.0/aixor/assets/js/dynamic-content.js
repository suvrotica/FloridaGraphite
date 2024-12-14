// Dynamically load header and footer
document.addEventListener('DOMContentLoaded', function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => document.getElementById('nav-placeholder').innerHTML = data);
    fetch('nav.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-placeholder').innerHTML = data);

    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-placeholder').innerHTML = data);
});
