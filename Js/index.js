let personas = [];
let persona = {};
var contadorP=0;
var contadorE=0;

for (let index = 0; index < 50; index++) {
    //setTimeout(() => {
        $.ajax({
            url: "https://randomuser.me/api",
            success: (datos) => {
                let person = datos.results[0];
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
                if((contadorP+contadorE)==50){
                    mostrarPersonas();
                }
            },
            error: (err) => {
                console.log(err);
                contadorE++;
            }
        });
    //}, 1000)


}


function mostrarPersonas() {
    console.log("pintar personas");
}