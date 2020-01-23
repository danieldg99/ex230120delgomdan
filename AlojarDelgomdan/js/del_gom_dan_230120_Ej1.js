document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('delgomdanBoton');
    const contador = document.getElementById('delgomdanContador');
    const audio1 = document.getElementById('audio1');
    const resetAudio = document.getElementById('delgomdanResetAudio');


    if (typeof(Storage) == 'undefined') {
        window.alert('El navegador no soporta almacenamiento local');
    } else {
        console.log('soporta storage')
        if (!localStorage.getItem('delgomdanClick')) {
            localStorage.setItem('delgomdanClick', 0);
            contador.textContent = localStorage.getItem('deldomdanClick');
        } else {
            contador.innerHTML = localStorage.getItem('delgomdanClick');
        }
    }

    resetAudio.addEventListener('click', () => {
        audio1.currentTime = 0;
        audio1.play();
    })

    boton.addEventListener('click', () => {
        let x = 30;
        let y = localStorage.getItem('deldomdanClick');
        console.log(y);
        localStorage.setItem('delgomdanClick', x);
        contador.innerHTML = localStorage.getItem('delgomdanClick');
    })
})