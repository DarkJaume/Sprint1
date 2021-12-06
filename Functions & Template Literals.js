//Nivell1//

//Exercici1//

function name(nombre) {
    console.log(nombre)
}
name("jaime")

//Nivell2//

//Exercici1//

const nom = "james";
const cognom = "Brown";

console.log(`Nom complet: ${nom} ${cognom}`);

//Nivell3//

//Exercici1//

let Contar = [];

for (let i = 0; i < 10; i++) {
    Contar.push(() => {
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
        console.log("****************");
    });
}

Contar.forEach((f) => f());

//Exercici2//

let mostraNom = (function (nom) {
    console.log(`Nom: ${nom}`);
})("James");