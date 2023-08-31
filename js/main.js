
// sonidos 

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



document.addEventListener("DOMContentLoaded", function () {
    const commentList = document.getElementById("commentList");
    const commentText = document.getElementById("commentText");
    const submitComment = document.getElementById("submitComment");

    // Obtener comentarios almacenados en localStorage al cargar la página
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    // Mostrar comentarios existentes
    function showComments() {
        commentList.innerHTML = "";
        comments.forEach(function (comment) {
            const li = document.createElement("li");
            li.textContent = comment;
            commentList.appendChild(li);
        });
    }

    showComments();

    // Agregar un nuevo comentario
    submitComment.addEventListener("click", function () {
        const newComment = commentText.value;
        if (newComment.trim() !== "") {
            comments.push(newComment);
            localStorage.setItem("comments", JSON.stringify(comments));
            commentText.value = "";
            showComments();
        }
    });
});







