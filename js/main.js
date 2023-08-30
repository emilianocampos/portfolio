


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


