// Crea una constante PREPARATION_MINUTES_PER_INGREDIENT con valor 3.

import { SocketAddress } from "net";
import { removeAllListeners } from "process";

// Crea una constante EXPECTED_MINUTES_IN_OVEN con valor 25.

// Escribe una función remainingMinutesInOven(actualMinutesInOven) que devuelva cuántos minutos faltan en el horno.

// Escribe una función preparationTimeInMinutes(numberOfIngredients) que devuelva el tiempo de preparación en base a los ingredientes.

// Escribe una función totalTimeInMinutes(numberOfIngredients, actualMinutesInOven) que devuelva el tiempo total: preparación + horno ya transcurrido.

export const PREPARATION_MINUTES_PER_INGREDIENT = 3;
export const EXPECTED_MINUTES_IN_OVEN = 25;

export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

export function preparationTimeInMinutes(numberOfIngredients) {
  return numberOfIngredients * PREPARATION_MINUTES_PER_INGREDIENT;
}

export function totalTimeInMinutes(numberOfIngredients, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfIngredients) + actualMinutesInOven;
}
