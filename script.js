let cells = document.body.querySelectorAll(".cell")

let x_peice = document.body.querySelectorAll(".x-piece")
let o_piece = document.body.querySelectorAll(".o-piece")

let draggedPiece = null;

x_peice.forEach(element => {
    element.addEventListener("dragstart", () => {
        draggedPiece = element
    })
});

o_piece.forEach(element => {
    element.addEventListener("dragstart", () => {
        draggedPiece = element
    })
})

cells.forEach(element => {
    element.addEventListener("dragover", (event) => {
        event.preventDefault()
    })

    element.addEventListener("drop", (e) => {
        e.preventDefault()

        if (element.children.length > 0) {
            return
        }
        element.append(draggedPiece)
    })
})

let pieces = document.body.querySelector(".piece-container")
pieces.addEventListener("dragover", (e) => {
    e.preventDefault()
})

pieces.addEventListener("drop", (e) => {
    e.preventDefault()
    pieces.append(draggedPiece)
})


let restart = document.body.querySelector(".restart")
restart.addEventListener("click", () => {
    location.reload()
})


