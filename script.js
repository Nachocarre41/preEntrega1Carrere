//DECLARO CONSTANTES DE VALORES DE EURO Y DOLAR

const dolar = 945;
const euro = 1035;

//FUNCIONES FLECHA PARA CALCULAR EL CAMBIO Y MOSTRARLO CON UN ALERT

cambioDolar = () => {
  let monto = prompt("Cuantos pesos queres convertir?: ");

  alert(monto / dolar);
};
cambioEuro = () => {
  let monto = prompt("Cuantos pesos queres convertir?: ");

  alert(monto / euro);
};

//BUCLES PARA REALIZAR CAMBIO 7 VECES Y CONDICIONALES PARA USAR UNA FUNCION U OTRA
for (let i = 0; i < 7; i++) {
  let calcular = prompt("A que moneda queres convertir? (EURO/DOLAR):");

  if (calcular == "DOLAR") {
    cambioDolar();
  } else if (calcular == "EURO") {
    cambioEuro();
  } else {
    alert("Moneda invalida");
  }
}
