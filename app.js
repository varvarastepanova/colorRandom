function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
}

function randomColor() {
    // Задаем значения для трех цветов
    let red = getRandomNumber(0, 256)
    let green = getRandomNumber(0, 256)
    let blue = getRandomNumber(0, 256)
    document.getElementById('body').style.background = `rgb(${red}, ${green}, ${blue})`
}
