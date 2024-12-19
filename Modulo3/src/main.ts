/* Módulo 3 - Variables - Laboratorio
Autor: Santiago Ardila

    Grupos musicales

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock

2.1-Cada género queremos tenerlo en una variable

2.2- Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.
 */

//Interface
interface GruposMusicales {
  nombreGrupo: string;
  añoFundado: number;
  estaActivo: boolean;
  genero: string;
}

//Variable de Generos
const Genero_Pop_Rock = "🎵 Pop Rock";
const Genero_Rock = "🎸 Rock";
const Genero_Hard_Rock = "🤘 Hard Rock";
const Genero_Clasica = "🎼 Clásica";

//Grupos musicales

const theBeatles: GruposMusicales = {
  nombreGrupo: "The Beatles",
  añoFundado: 1960,
  estaActivo: false,
  genero: Genero_Pop_Rock,
};

const queen: GruposMusicales = {
  nombreGrupo: "Queen",
  añoFundado: 1970,
  estaActivo: false,
  genero: Genero_Rock,
};

const acdc: GruposMusicales = {
  nombreGrupo: "AC/DC",
  añoFundado: 1973,
  estaActivo: true,
  genero: Genero_Hard_Rock,
};

const beethoven: GruposMusicales = {
  nombreGrupo: "Ludwig van Beethoven",
  añoFundado: 1770,
  estaActivo: false,
  genero: Genero_Clasica,
};

const rollingStones: GruposMusicales = {
  nombreGrupo: "The Rolling Stones",
  añoFundado: 1962,
  estaActivo: true,
  genero: Genero_Rock,
};

//Consola
console.log(
  `%c${theBeatles.nombreGrupo}`,
  "font-weight: bold; font-size: 16px; background-color: green; color: yellow;",
  `\nAño de Fundacion: ${theBeatles.añoFundado}`,
  `\nActivo: ${theBeatles.estaActivo ? "Si" : "No"}`,
  `\nGenero: ${theBeatles.genero}\n`
);

console.log(
  `%c${queen.nombreGrupo}`,
  "font-weight: bold; font-size: 16px; background-color: green; color: blue;",
  `\nAño de Fundacion: ${queen.añoFundado}`,
  `\nActivo: ${queen.estaActivo ? "Si" : "No"}`,
  `\nGenero: ${queen.genero}\n`
);

console.log(
  `%c${acdc.nombreGrupo}`,
  "font-weight: bold; font-size: 16px; background-color: green; color: red;",
  `\nAño de Fundacion: ${acdc.añoFundado}`,
  `\nActivo: ${acdc.estaActivo ? "Si" : "No"}`,
  `\nGenero: ${acdc.genero}\n`
);

console.log(
  `%c${beethoven.nombreGrupo}`,
  "font-weight: bold; font-size: 16px; background-color: green; color: white;",
  `\nAño de Fundacion: ${beethoven.añoFundado}`,
  `\nActivo: ${beethoven.estaActivo ? "Si" : "No"}`,
  `\nGenero: ${beethoven.genero}\n`
);

console.log(
  `%c${rollingStones.nombreGrupo}`,
  "font-weight: bold; font-size: 16px; background-color: green; color: black;",
  `\nAño de Fundacion: ${rollingStones.añoFundado}`,
  `\nActivo: ${rollingStones.estaActivo ? "Si" : "No"}`,
  `\nGenero: ${rollingStones.genero}\n`
);
