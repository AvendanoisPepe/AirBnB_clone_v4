const burbujita = function () {
    console.log("hugo");
    $.getJSON("http://172.20.244.135:5001/api/v1/status/", (data) => {
        if (data.status === "OK") {
            console.log(data.status);
            $("div#api_status").addClass("available");
        } else {
            $("div#api_status").removeClass("available");
        }
    });
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

$(() => {
    servicios();
    burbujita();
});