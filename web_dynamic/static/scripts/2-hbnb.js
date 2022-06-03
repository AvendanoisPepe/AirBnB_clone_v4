const burbujita = function () {
    var cabecera = document.getElementById('api_status');
    fetch("http://172.20.244.135:5001/api/v1/status/").then(
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

const servicios = function () {
    //verificamos que el doom este cargado
    const listados = {};
    let eliminar = [];
    //generamos el evento
    $('.amenities .popover input').change(function () {
    //accedemos a la ubicacion del elemento y obtenemos su valor
    if ($(this).prop('checked')) {
        //agregamos a la lista el valor obtenido
        listados[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
        //elimino las propiades del objeto listado o el contenido
        delete listados[$(this).attr('data-id')];
    }
    //guardamos la matriz de listados ya ordenada
    eliminar = Object.values(listados).sort();
    //si hay al menos uno selecionado la imprimi y agrega la ,
    if (eliminar.length != 0)
        $('.amenities h4').text(eliminar.join(', '));
    else
        //si no deja tal cual
        $('.amenities h4').html("&nbsp;");
  });
}
const servicios1 = function () {
    const listados = {};
    let eliminar = [];

    let pepe = document.getElementById("hugo");
    let mie = document.querySelectorAll(".miedo");
    let ap = document.getElementById("mk")
    
        pepe.addEventListener("change", function () {
        mie.forEach((e) => {
        if (e.checked == true) {
            console.log(mie[9].attributes[2]);
            //let hee = document.createElement('p');
            //hee.innerHTML = e
        }
        })
    })
}
servicios1();
burbujita();