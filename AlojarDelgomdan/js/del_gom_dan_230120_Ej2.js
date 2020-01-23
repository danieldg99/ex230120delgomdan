document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video1')
    const play = document.getElementById('delgomdanPlay')
    const pause = document.getElementById('delgomdanPause')
    const restart = document.getElementById('delgomdanRestart')
    const vUp = document.getElementById('delgomdanVolumeUp')
    const vDown = document.getElementById('delgomdanVolumeDown')

    const canvas = document.getElementById('delgomdanCanvas')
    const botonCanvas = document.getElementById('delgomdanBotonCanvas')
    const rec10 = document.getElementById('delgomdanRecurso10')


    play.addEventListener('click', () => {
        video.play()
    })
    pause.addEventListener('click', () => {
        video.pause()
    })
    restart.addEventListener('click', () => {
        video.currentTime = 0;
        video.play();
    })
    vUp.addEventListener('click', () => {
        video.volume += 0.1
    })
    vDown.addEventListener('click', () => {
        video.volume -= 0.1
    })

    botonCanvas.addEventListener('click', () => {
        const ctx = canvas.getContext('2d')

        ctx.moveTo(420, 280)
        ctx.lineTo(580, 280)
        ctx.lineTo(580, 120)
        ctx.lineTo(420, 120)
        ctx.lineTo(420, 280)

        ctx.moveTo(580, 120)
        ctx.lineTo(500, 20)
        ctx.lineTo(420, 120)

        ctx.moveTo(480, 280)
        ctx.lineTo(480, 240)
        ctx.lineTo(520, 240)
        ctx.lineTo(520, 280)

        ctx.stroke()

        ctx.beginPath()
        ctx.arc(500, 70, 20, 0, 2 * Math.PI)
        ctx.stroke()

        ctx.drawImage(rec10, 0, 0)
    })



})