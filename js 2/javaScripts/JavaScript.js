addButton = document.querySelector(".add")
inputBox = document.querySelector("#input-box")
parentDo = document.querySelector(".parent-do")
removeButton = document.querySelector(".remove")
addButton.addEventListener("click", () => {
    const valueInput = inputBox.value.trim()
    if (!valueInput){
        return false
    }

    const boxDo = document.createElement("div")
    boxDo.className = "box-do"

    const contentDo = document.createElement("div")
    contentDo.className = "content-do"

    const squareIcon = document.createElement("i")
    squareIcon.className = "bi bi-square"

    squareIcon.addEventListener("click", () => {
    squareIcon.classList.toggle("bi-square")
    squareIcon.classList.toggle("bi-check-square")
})


    const p = document.createElement("p")
    p.textContent = valueInput

    const trashIcon = document.createElement("i")
    trashIcon.className = "bi bi-trash3"

    trashIcon.addEventListener("click", () => {
    boxDo.remove()
})

    contentDo.appendChild(squareIcon)
    contentDo.appendChild(p)
    boxDo.appendChild(contentDo)
    boxDo.appendChild(trashIcon)

    parentDo.appendChild(boxDo)

    inputBox.value = ""
})
