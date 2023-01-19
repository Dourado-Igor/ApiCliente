let personas = [];

var contadorP = 0;
var contadorE = 0;

for (let index = 0; index < 50; index++) {
    setTimeout(() => {
    $.ajax({
        url: "https://randomuser.me/api",
        success: (datos) => {
            let person = datos.results[0];
            let persona = {};
            persona.nombre = person.name.first;
            persona.apellido = person.name.last;
            persona.genero = person.gender;
            persona.edad = person.dob.age;
            persona.imagen = person.picture.large;
            persona.pais = person.location.country;
            persona.ciudad = person.location.city;
            //console.log(persona);
            personas.push(persona);
            contadorP++;
            if ((contadorP + contadorE) == 50) {
                mostrarPersonas();
            }
        },
        error: (err) => {
            console.log(err);
            contadorE++;
        }
    });
    }, 1000)


}


function mostrarPersonas() {
    let aleatorio 
    let contenido = "";
    for (let index = 0; index < personas.length; index++) {
        const persona = personas[index];
        let arti = `<article class="col-md-1 col-sm-6 persona">
        <p>${persona.nombre}</p>
        <img src="${persona.imagen}" alt="">
    </article>`;
    contenido+=arti;
    }
    $("#ContenedorPersonas").html(contenido);
}