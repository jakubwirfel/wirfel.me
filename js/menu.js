var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');

var footerColor = document.getElementsByClassName('links_footer');
var headerColor = document.getElementsByClassName('page')[0];
var navColor = document.getElementsByClassName('nav_link');
var dashColor = document.getElementsByClassName('nav_dash'); 

var particles = document.getElementById('particles-js');
var nav = document.getElementsByClassName('nav')[0];

link1.onmouseover = function () {
    particles.style.backgroundColor = ('#00A4CCFF');
    headerColor.style.color = ('#F96167');
    for (let i=0; i<navColor.length; i++) { 
        navColor[i].style.color = "#F96167";
    }
    link2.style.opacity = ('0.5');
    link3.style.opacity = ('0.5');
    for (let i=0; i<footerColor.length; i++) { 
        footerColor[i].style.color = "#F96167";
    }
    for (let i=0; i<dashColor.length; i++) { 
        dashColor[i].style.backgroundColor = "#F96167";
    }
}
link2.onmouseover = function () {
    particles.style.backgroundColor = ('#161B21');
    headerColor.style.color = ('#F4A950');
    for (let i=0; i<navColor.length; i++) { 
        navColor[i].style.color = "#F4A950";
    }
    link1.style.opacity = ('0.5');
    link3.style.opacity = ('0.5');
    for (let i=0; i<footerColor.length; i++) { 
        footerColor[i].style.color = "#F4A950";
    }
    for (let i=0; i<dashColor.length; i++) { 
        dashColor[i].style.backgroundColor = "#F4A950";
    }
}
link3.onmouseover = function () {
    particles.style.backgroundColor = ('#EC8B5E');
    headerColor.style.color = ('#141A46');
    for (let i=0; i<navColor.length; i++) { 
        navColor[i].style.color = "#141A46";
    }
    link1.style.opacity = ('0.5');
    link2.style.opacity = ('0.5');
    for (let i=0; i<footerColor.length; i++) { 
        footerColor[i].style.color = "#141A46";
    }
    for (let i=0; i<dashColor.length; i++) { 
        dashColor[i].style.backgroundColor = "#141A46";
    }
}
nav.onmouseout = function () {
    link1.style.opacity = ('1');
    link2.style.opacity = ('1');
    link3.style.opacity = ('1');
}