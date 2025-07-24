const bar = document.querySelector("#bar")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")

const hLinks = document.querySelectorAll("#hLink")

bar.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    
})

hLinks.forEach(link=>{
link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    
})

})

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    
})