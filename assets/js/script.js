document.addEventListener('DOMContentLoaded', function () {
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
});
