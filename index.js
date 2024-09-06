const body = document.getElementsByTagName('body')[0]

function randomcolor(){
    const red = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)
    const color = `rgb(${red} , ${green} , ${blue})`
    body.style.backgroundColor = color;

}
function redcolor(){
    body.style.backgroundColor = 'red';
}
function bluecolor(){
    body.style.backgroundColor = 'blue';
}
function greencolor(){
    body.style.backgroundColor = 'green'
}
