//Boolean
let muted = true;
//numeros
let numerador = 42;
let denominador = 6;
let resultado = numerador / denominador;
//String
let nombre = 'richard';
let saludo = `Me Llamo ${nombre}`;
//Array
let people = [];
people = [
    "isable",
    "Nicol",
    "Raul"
];
people.push('9000');
let peopleAndNumbre = [];
peopleAndNumbre.push('ricardo');
peopleAndNumbre.push(435);
let //enum
Color;
(function(Color1) {
    Color1["Rojo"] = "Rojo";
    Color1["Verde"] = "Verde";
    Color1["Azul"] = "Azul";
})(Color || (Color = {
}));
let colorFavorito = Color.Azul;
console.log(`Mi Color ES ${colorFavorito}`);
//any
let comodin;
comodin = {
    type: 'wildras'
};
//Object
let someObject = {
    type: 'redee'
};
//funciones
function add(a, b) {
    return a + b;
}
const sum = add(4, 5);
function createAdder(a) {
    return function(b) {
        return b + a;
    };
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);
//para que el parametro sea opcional se le pone antes de los dos punto este simbolo ?
//pero retorna undefine
function fullName(firstName, lastName = 'peñaranda') {
    return `${firstName} ${lastName};`;
}
const keiner = fullName('keiner');
console.log(keiner);
(function(Color2) {
    Color2["Rojo1"] = 'Rojo';
    Color2["Verde1"] = 'Verde';
})(Color || (Color = {
}));
let rect = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo1
};
function area(r) {
    return r.alto * r.ancho;
}
const areaRect = area(rect);
console.log(areaRect);
console.log(rect.toString());
rect.toString = function() {
    return `Un Rectangulo ${this.color}`;
};
console.log(rect.toString());

//# sourceMappingURL=index.4551d5d4.js.map
