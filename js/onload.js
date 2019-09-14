var particles = document.getElementById('particles-js');
var sidebar_link = document.getElementById('sidebar_link');
var sidebar_owner = document.querySelector('.sidebar_owner');
var sidebar_name = document.querySelector('.sidebar_name');

aboutload = function () {
    particles.style.backgroundColor = ('#004D47');
    sidebar_link.style.color = ('#B9C4C9');
    sidebar_link.style.borderColor = ('#B9C4C9');
    sidebar_owner.style.color = ('#B9C4C9');
    sidebar_name.style.color = ('#B9C4C9');

    sidebar_link.onmouseover = function () {
        sidebar_link.style.backgroundColor = ('#B9C4C9');
        sidebar_link.style.borderColor = ('#000');
        sidebar_link.style.color = ('#000');
    }
    sidebar_link.onmouseout= function () {
        sidebar_link.style.backgroundColor = ('transparent');
        sidebar_link.style.borderColor = ('#B9C4C9');
        sidebar_link.style.color = ('#B9C4C9');
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
    sidebar_link.style.color = ('#141A46');
    sidebar_link.style.borderColor = ('#141A46');
    sidebar_owner.style.color = ('#141A46');
    sidebar_name.style.color = ('#141A46');

    sidebar_link.onmouseover = function () {
        sidebar_link.style.backgroundColor = ('#141A46');
        sidebar_link.style.borderColor = ('#fff');
        sidebar_link.style.color = ('#fff');
    }
    sidebar_link.onmouseout= function () {
        sidebar_link.style.backgroundColor = ('transparent');
        sidebar_link.style.borderColor = ('#141A46');
        sidebar_link.style.color = ('#141A46');
    }
 }