var particles = document.getElementById('particles-js');
var sidebar_link = document.getElementById('sidebar_link');
var sidebar_owner = document.querySelector('.sidebar_owner');
var sidebar_name = document.querySelector('.sidebar_name');

aboutload = function () {
    particles.style.backgroundColor = ('#00A4CCFF');
    sidebar_link.style.color = ('#B71C1C');
    sidebar_link.style.borderColor = ('#B71C1C');
    sidebar_owner.style.color = ('#B71C1C');
    sidebar_name.style.color = ('#B71C1C');

    sidebar_link.onmouseover = function () {
        sidebar_link.style.backgroundColor = ('#B71C1C');
        sidebar_link.style.borderColor = ('#000');
        sidebar_link.style.color = ('#000');
    }
    sidebar_link.onmouseout= function () {
        sidebar_link.style.backgroundColor = ('transparent');
        sidebar_link.style.borderColor = ('#B71C1C');
        sidebar_link.style.color = ('#B71C1C');
    }
 }

workload = function () {
    particles.style.backgroundColor = ('#161B21');
    sidebar_link.style.color = ('#F4A950');
    sidebar_link.style.borderColor = ('#F4A950');
    sidebar_owner.style.color = ('#F4A950');
    sidebar_name.style.color = ('#F4A950');

    sidebar_link.onmouseover = function () {
        sidebar_link.style.backgroundColor = ('#F4A950');
        sidebar_link.style.borderColor = ('#000');
        sidebar_link.style.color = ('#000');
    }
    sidebar_link.onmouseout= function () {
        sidebar_link.style.backgroundColor = ('transparent');
        sidebar_link.style.borderColor = ('#F4A950');
        sidebar_link.style.color = ('#F4A950');
    }
 }

contactload = function () {
    particles.style.backgroundColor = ('#EC8B5E');
 }