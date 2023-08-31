


//swalert toast
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

Toast.fire({
    background: 'black',
    title: 'Bienvenido a mi portfolio',
    imageUrl: 'https://media.tenor.com/B64bnz6gRjEAAAAi/wave-hello.gif',
    width: '200px',
    imageWidth: '70px',
    color: 'white',
    font: 'bold'
})

//aos inicio
AOS.init();


//-descargar cv 
let btn = document.getElementById('downloadButton');


btn.addEventListener('click', () => {


    Swal.fire({
        title: 'Estas seguro?',
        text: "Se descargara un archivo .pdf!",
        imageUrl: './img/runcarpet.gif',
        showCancelButton: true,
        confirmButtonColor: '#1ca334',
        cancelButtonColor: '#d33',

        confirmButtonText: 'Si, descargar!'
    }).then((result) => {
        if (result.isConfirmed) {

            window.location.href = './doc/Cv Emiliano Campos.pdf'
        }
    })
})




//boton hacia arriba

let up = document.getElementById('btnIrArriba');
up.addEventListener('click', () => {

    let ring = document.getElementById('bell')
    ring.play();
    function irArriba() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    irArriba();
})

// Mostrar el botón cuando el usuario desplaza hacia abajo

window.addEventListener("scroll", function () {
    const btnIrArriba = document.getElementById("btnIrArriba");

    if (window.pageYOffset > 100) {
        btnIrArriba.style.display = "block";
    } else {
        btnIrArriba.style.display = "none";
    }
});


let multi = document.getElementById('multi');
let goBtn = document.getElementById('go');

goBtn.addEventListener('click', () => {
    multi.play();
})

let alert = document.getElementById('alert');
let alertBtn = document.getElementById('downloadButton');

alertBtn.addEventListener('click', () => {
    alert.play();
})

let hover = document.querySelectorAll('.ira');
let soundcel = document.getElementById('soundcel');
console.log(hover);

for (let hovers of hover) {
    hovers.addEventListener('mouseenter', () => {
        soundcel.play();

    })
}

const botonMeGusta = document.getElementById('botonMeGusta');
const contador = document.getElementById('contador');

// Verifica si ya existe un valor en localStorage para los "Me gusta"
if (localStorage.getItem('likes') === null) {
  // Si no existe, inicializa el contador en 0
  localStorage.setItem('likes', '0');
}

// Carga el valor del contador desde localStorage y muestra en la página
contador.textContent = localStorage.getItem('likes');

// Agrega un controlador de eventos al botón
botonMeGusta.addEventListener('click', function() {
  // Incrementa el contador
  let likes = parseInt(localStorage.getItem('likes'));
  likes++;
  
  // Actualiza el contador en la página
  contador.textContent = likes;
  
  // Guarda el nuevo valor en localStorage
  localStorage.setItem('likes', likes.toString());
});



