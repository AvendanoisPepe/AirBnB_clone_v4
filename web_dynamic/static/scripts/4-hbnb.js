const but = document.querySelector("button");
let data = {};

const burbujita = function () {
    var cabecera = document.getElementById('api_status');
    fetch("http://localhost:5001/api/v1/status/").then(
        data => { return data.json() }
    ).then(
        pedro => {
            if (pedro.status === "OK") {
                cabecera.classList.add('available');
            } else {
                cabecera.classList.remove('available');
            }
        }
    )
};

let carlos = [];

const servicios1 = function () {
    let pepe = document.getElementById("hugo");
    let mie = document.querySelectorAll(".miedo");
    let ap = document.getElementById("mk")

    pepe.addEventListener("click", function () {
      let selecionad = "";
      carlos = [];
        mie.forEach((e) => {
            if (e.checked == true) {
              selecionad += e.getAttribute("data-name") + ", ";
              carlos.push(e.getAttribute("data-id"));
            }
        })
            ap.innerText = selecionad;
    })
}
function fetchPlaces() {
  // Ejemplo implementando el metodo POST:
  async function postData(url = '') {
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

  postData('http://localhost:5001/api/v1/places_search/')
    .then(data => {

      for (const r of data) {
        let lugar=document.getElementById("hugomrk");
        let element = document.createElement("article");
        let textohtml = "<div class='title_box'><h2>" + r.name + "</h2><div class='price_by_night'>$" + r.price_by_night + "</div></div><div class='information'><div class='max_guest'> " + r.max_guest + " Guests</div><div class='number_rooms' > " + r.number_rooms + " Bedrooms</div><div class='number_bathrooms' > " + r.number_bathrooms + " Bathrooms</div></div><div class='user'><b>Owner:</b>" + r.user_id + "</div><div class='description'>" + r.description + "</div>";
        element.innerHTML=textohtml;
        lugar.appendChild((element))
    } return data;
    }).then (dato => {
    });
}

but.addEventListener("click", async function() {
  data = { amenities: carlos };
  let lugar = document.getElementById("hugomrk");
  lugar.textContent = "";
  console.log(data);
  fetchPlaces();  
})

fetchPlaces();
servicios1();
burbujita();