//Nivell 1

//Exercici 1

const promesa = (Conexio) =>
    new Promise((resolve, reject) => {
        if (Conexio === true) {
            resolve("Conexio ok");
        } else {
            reject("conexio erronea");
        }
    });

promesa(true)
    .then((mensaje) => {
        console.log("Comprobant exercici 1:");
        console.log(mensaje);
    })
    .catch((err) => {
        console.log("Nivel 1, ejercicio 1:");
        console.log(err);
    });

//Exercici 2:

const parImpar = (num, callback) => {
    num % 2 === 0
        ? callback(`El teu numero ${num} es par`)
        : callback(`El teu numero ${num} es impar`);
};

parImpar(2, (result) => console.log(result));

//Nivel 2


let employees = [
    {
        id: 1,
        name: "Linux Torvalds",
    },
    {
        id: 2,
        name: "Bill Gates",
    },
    {
        id: 3,
        name: "Jeff Bezos",
    },
];

let salaries = [
    {
        id: 1,
        salary: 4000,
    },
    {
        id: 2,
        salary: 1000,
    },
    {
        id: 3,
        salary: 2000,
    },
];

//Exercici 1

function getEmployee(id) {
    return new Promise((resolve, reject) => {
        let findEmployee = employees.find((e) => e.id === id);
        if (findEmployee) {
            resolve(findEmployee);
        } else {
            reject(new Error("No employee found"));
        }
    });
}

console.log(getEmployee(1));

//Exercici 2

function getSalary(employee) {
    return new Promise((resolve, reject) => {
        let findSalary = salaries.find((s) => s.id === employee.id);
        if (findSalary) {
            resolve(findSalary.salary);
        } else {
            reject(new Error("No salary found"));
        }
    });
}

console.log(
    getSalary({
        id: 3,
        name: "Jeff Bezos",
    })
);

//Exercici 3

getEmployee(2)
    .then((res) => {
        return getSalary(res);
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
