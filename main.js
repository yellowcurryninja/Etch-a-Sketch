const container = document.querySelector(".container")

for (let i = 0; i < 3626; i++) {
    const div = document.createElement("div")
    div.className = `${i}`
    container.appendChild(div)
    div.addEventListener("mouseover",(e) => {
        e.target.style.backgroundColor = "black"
    })
}
