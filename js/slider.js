const slide = ["img/slider2.jpg", "img/slider3.jpg", "img/slider4.jpg", "img/slider5.jpg", "img/slider6.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}


// Changement de slide toutes les 4 secondes


// setInterval(function() {
//     ChangeSlide(1);
// }, 4000);



document.addEventListener("DOMContentLoaded", function() {
    let bullets = document.createElement('div');
    bullets.setAttribute('id', 'bullets');
    document.body.appendChild(bullets);

    for (let i = 0; i < slide.length; i++) {
        let bullet = document.createElement('span');
        bullet.setAttribute('class', 'bullet');
        bullet.addEventListener('click', function() {
            numero = i;
            document.getElementById("slide").src = slide[numero];
        });
        document.getElementById('bullets').appendChild(bullet);
    }
});
