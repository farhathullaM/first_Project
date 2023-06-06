let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("para")


function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let pre = " " + count + " - " 
    saveEl.innerText += pre
    countEl.textContent = 0
    count=0
}


