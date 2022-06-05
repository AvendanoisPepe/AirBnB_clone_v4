const burbujita = function () {
    var cabecera = document.getElementById('api_status');
    fetch("http://172.20.252.43:5001/api/v1/status/").then(
        data => { return data.json() }
    ).then(
        pedro => {
            console.log(pedro.status);
            if (pedro.status === "OK") {
                cabecera.classList.add('available');
            } else {
                cabecera.classList.remove('available');
            }
        }
    )
};

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
burbujita();