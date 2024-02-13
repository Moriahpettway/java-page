const header = document. querySelector("#header")

document.querySelector("#chanterelle-button").addEventListener("click", function() {
    header.innerHTML = "Chanterelle"
    document.querySelector ("#image").src = "chanterelle.jpg"
    document.querySelector("#credit").innerHTML = "O Neil Leclerc"
})

document.querySelector("#oyster-button").addEventListener("click",function() {
    header.innerHTML = "Oyster mushroom"
    document.querySelector("#image").src = "oyster.jpg"
    document.querySelector("#credit").innerHTML = "O Robbie Sproule" 
})

