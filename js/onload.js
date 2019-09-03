var particles = document.getElementById('particles-js');
var image = document.getElementById('image');
var width = window.innerWidth;

aboutusload = function () {
    particles.style.backgroundColor = ('#00A4CCFF');
 }
workload = function () {
    particles.style.backgroundColor = ('#161B21');
    if (width >= 560) {
        image.src = 'assets/Ogrodnictwo2.png';
    }
 }
contactload = function () {
    particles.style.backgroundColor = ('#EC8B5E');
 }
