const container = document.querySelector(".container")

for (let i = 0; i < 3456; i++) {
    const div = document.createElement("div")
    div.className = `${i}`
    container.appendChild(div)
    div.style.opacity = 0.0
    div.addEventListener("mouseover",(e) => {
        e.target.style.backgroundColor = "black"
        let divOpacity = parseFloat(div.style.opacity);
        div.style.opacity = `${divOpacity = divOpacity + 0.2}`;
    })
}

const x4 = document.querySelector(".x4")
const x8 = document.querySelector(".x8")
const x16 = document.querySelector(".x16")
const x32 = document.querySelector(".x32")
const x64 = document.querySelector(".x64")
const x128 = document.querySelector(".x128")

x4.addEventListener("click",() => {
    container.textContent = ''
    for (let i = 0; i < 55296; i++) {
        const div = document.createElement("div")
        div.style.height = "4px"
        div.style.width = "4px"
        div.className = `${i}`
        container.appendChild(div)
        div.style.opacity = 0.0
        div.addEventListener("mouseover",(e) => {
            e.target.style.backgroundColor = "black"
            let divOpacity = parseFloat(div.style.opacity);
            div.style.opacity = `${divOpacity = divOpacity + 0.2}`;
        })
    }
})
x8.addEventListener("click",() => {
    container.textContent = ''
    for (let i = 0; i < 13824; i++) {
        const div = document.createElement("div")
        div.style.height = "8px"
        div.style.width = "8px"
        div.className = `${i}`
        container.appendChild(div)
        div.style.opacity = 0.0
        div.addEventListener("mouseover",(e) => {
            e.target.style.backgroundColor = "black"
            let divOpacity = parseFloat(div.style.opacity);
            div.style.opacity = `${divOpacity = divOpacity + 0.2}`;
        })
    }
})
x16.addEventListener("click",() => {
    container.textContent = ''
    for (let i = 0; i < 3465; i++) {
        const div = document.createElement("div")
        div.style.height = "16px"
        div.style.width = "16px"
        div.className = `${i}`
        container.appendChild(div)
        div.style.opacity = 0.0
        div.addEventListener("mouseover",(e) => {
            e.target.style.backgroundColor = "black"
            let divOpacity = parseFloat(div.style.opacity);
            div.style.opacity = `${divOpacity = divOpacity + 0.2}`;
        })
    }
})
x32.addEventListener("click",() => {
    container.textContent = ''
    for (let i = 0; i < 864; i++) {
        const div = document.createElement("div")
        div.style.height = "32px"
        div.style.width = "32px"
        div.className = `${i}`
        container.appendChild(div)
        div.style.opacity = 0.0
        div.addEventListener("mouseover",(e) => {
            e.target.style.backgroundColor = "black"
            let divOpacity = parseFloat(div.style.opacity);
            div.style.opacity = `${divOpacity = divOpacity + 0.2}`;
        })
    }
})
x64.addEventListener("click",() => {
    container.textContent = ''
    for (let i = 0; i < 216; i++) {
        const div = document.createElement("div")
        div.style.height = "64px"
        div.style.width = "64px"
        div.className = `${i}`
        container.appendChild(div)
        div.style.opacity = 0.0
        div.addEventListener("mouseover",(e) => {
            e.target.style.backgroundColor = "black"
            let divOpacity = parseFloat(div.style.opacity);
            div.style.opacity = `${divOpacity = divOpacity + 0.2}`;
        })
    }
})
x128.addEventListener("click",() => {
    container.textContent = ''
    for (let i = 0; i < 54; i++) {
        const div = document.createElement("div")
        div.style.height = "128px"
        div.style.width = "128px"
        div.className = `${i}`
        container.appendChild(div)
        div.style.opacity = 0.0
        div.addEventListener("mouseover",(e) => {
            e.target.style.backgroundColor = "black"
            let divOpacity = parseFloat(div.style.opacity);
            div.style.opacity = `${divOpacity = divOpacity + 0.2}`;
        })
    }
})