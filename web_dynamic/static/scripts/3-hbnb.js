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

function fetchPlaces() {
  // Ejemplo implementando el metodo POST:
  async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  postData('http://172.20.252.43:5001/api/v1/places_search/')
    .then(data => {
      console.log(data[0]['name']); // JSON data parsed by `data.json()` call
      for (const r of data) {
        console.log(r.name);
        var lugar=document.getElementById("hugomrk");
        let element = document.createElement("pre");
        let textohtml = "<article><div class='title_box'><h2>" + r.name + "</h2><div class='price_by_night'>$" + r.price_by_night + "</div></div><div class='information'><div class='max_guest'> " + r.max_guest + " Guests</div><div class='number_rooms' > " + r.number_rooms + " Bedrooms</div><div class='number_bathrooms' > " + r.number_bathrooms + " Bathrooms</div></div><div class='user'><b>Owner:</b>" + r.user_id + "</div><div class='description'>" + r.description + "</div></article>";
        element.innerHTML=textohtml;
        lugar.appendChild((element))
    } return data;
    }).then (dato => {
      console.log(dato)
    });
}

fetchPlaces();
servicios1();
burbujita();