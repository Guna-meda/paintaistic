slideOpen ();

function slideOpen () {
let btn = document.querySelector('#btn');
let slidebar = document.querySelector('.slidebar');

btn.onclick = function() {
    slidebar.classList.toggle('active');
}
}

