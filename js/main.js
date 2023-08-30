const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3400,
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


AOS.init();


//-descargar cv 
let btn = document.getElementById('downloadButton');

btn.addEventListener('click', () =>{

    window.location.href = './doc/Cv Emiliano Campos.pdf'
    
})