const boxes = document.querySelectorAll(".box"),
image1 = document.querySelector(".img1"),
image2 = document.querySelector(".img2")

let targetedImage;


boxes.forEach((box, index)=> {

    box.addEventListener("dragover", (e) => {
        e.preventDefault()
        box.classList.add("hovered")
    })

    box.addEventListener("dragstart", (e) => {
        // console.log(e.target);
        targetedImage = e.target
    })

    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered")
    })

    box.addEventListener("drop", e => {
        box.insertAdjacentElement("afterbegin",targetedImage)
        box.classList.remove("hovered")
    } )
});