const servicios1 = function () {
    let pepe = document.getElementById("hugo");
    let mie = document.querySelectorAll(".miedo");
    let ap = document.getElementById("mk")

    pepe.addEventListener("click", function () {
        let selecionad = "";
        mie.forEach((e) => {
            if (e.checked == true) {
                selecionad += e.getAttribute("data-name") + ", ";
            }
        })
            ap.innerText = selecionad;
    })
}

servicios1();