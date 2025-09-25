var dollarUS = document.getElementById("dollar_americain");
var dollarKangooroo = document.getElementById("dollar_kangooroo");
var euroNbr = document.getElementById("nombre");
var convert = document.getElementById("convert");


convert.addEventListener("click", () => {
    dollarUS.value = (euroNbr.value)*1.01;
    dollarKangooroo.value = (euroNbr.value)*1.47;
})