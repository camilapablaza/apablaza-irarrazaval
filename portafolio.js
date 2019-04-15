// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "LA PIJAMERÍA",
    about: "Portafolio en redes sociales, catálogo y modelaje, Año 2017.",
}, {
    figure: "media/foto-02.jpg",
    title: "FOTOGRAFÍA",
    about: "Fotografía en África, año 2019.",
}, {
    figure: "media/foto-03.jpg",
    title: "MODELAJE",
    about: "Comerciales, catálogos y fotografía, Año 2008 a 2018.",
}, {
    figure: "media/foto-04.jpg",
    title: "MAQUILLAJE",
    about: "Maquillaje para Editoriales de Modelaje, Año 2017.",
}, {
    figure: "media/foto-05.jpg",
    title: "AUDIOVISUAL",
    about: "Realización de cortos y audiovisuales, Año 2019.",
}, {
    figure: "media/foto-06.jpg",
    title: "COLLAGE CALLEJERO",
    about: "Realización de Collages y empapelamiento en la calle, Año 2017.",
}, {
    figure: "media/foto-07.jpg",
    title: "GUÍAS TURÍSTICAS",
    about: "Guías de turísmo para organización Pro Turismo de Cunco, Año 2018.",
}, {
    figure: "media/foto-08.jpg",
    title: "MAQUILLAJE SOCIAL",
    about: "Maquillaje para todo tipo de eventos, Año 2015 a 2019."
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
