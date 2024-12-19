/**Cena de Cumpleaños entre amigos
 * Autor: Santiago Ardila
 *
 * Datos:
 * Amigos: 6
 * Ticket Cena: 120€
 * Costo de Bebidas: 18€
 *
 */

const numeroAmigos = 6;

const valorTotal = 120;

const precioBebidas = 18;

const precioComida = valorTotal - precioBebidas;

// Al Calcular el precio de la comida restando el precio de las bebidas, simplemente dividimos entre el numero de amigos
const pagoPorAmigo = precioComida / numeroAmigos;

//mostramos el resultado en consola (17€) (las comillas invertidas permmiten insertar variables con ${})
console.log(`Cada amigo debe pagar: ${pagoPorAmigo} €`);
