let color = document.querySelector("div")
let aqua = document.getElementById("aqua")
let teal = document.getElementById("teal")
let pink = document.getElementById("pink")
let purple = document.getElementById("purple")
let colorless = document.getElementById("colorless")

function aqua_click() {
    color.style.backgroundColor = "aqua"
    color.innerHTML = "aqua"
}
function teal_click() {
    color.style.backgroundColor = "teal"
    color.innerHTML = "teal"
}
function pink_click() {
    color.style.backgroundColor = "pink"
    color.innerHTML = "pink"
}
function purple_click() {
    color.style.backgroundColor = "purple"
    color.innerHTML = "purple"
}
function colorless_click() {
    color.style.backgroundColor = "white"
    color.innerHTML = "colorless"
}
aqua.addEventListener("click", aqua_click)
teal.addEventListener("click", teal_click)
pink.addEventListener("click", pink_click)
purple.addEventListener("click", purple_click)
colorless.addEventListener("click", colorless_click)