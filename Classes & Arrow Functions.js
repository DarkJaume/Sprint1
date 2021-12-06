//Nivell1//

//Exercici1//

console.log(((a, b) => `${a} + ${b} = ${a + b}`)(8, 5));

//Nivell2//

//Exercici1//

let miEdad = (edad) => ({ edad: edad });

console.log(miEdad(38));

//Exercici2//

class Persona {
    constructor(nom) {
        this.nom = nom;
    }
    dirNom() {
        console.log(`Nom: ${this.nom}`);
    }
}
const Nom = new Persona("James");
Nom.dirNom();

//Nivell3//

//Exercici1//

class Figura {
    constructor() {
        if (new.target === Figura) {
            throw new Error("No es pot instanciar clase abstracte");
        }
    }
}

const creaObjecte = () => {
    nouObj = Object.create(Figura.prototype, {
        constructor: { value: Figura },
    });
    return nouObj;
};

const triangle = creaObjecte();
const cuadrat = creaObjecte();
const cercle = creaObjecte();

console.log(cercle);
console.log(cuadrat);
console.log(triangle);