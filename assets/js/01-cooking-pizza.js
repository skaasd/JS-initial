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

// file.js
export const MY_VALUE = 10;

export function add(num1, num2) {
  return num1 + num2;
}

// file.spec.js
import { MY_VALUE, add } from './file';

add(MY_VALUE, 5);
// => 15


/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
export function canExecuteFastAttack(knightIsAwake) {
  throw new Error('Remove this line and implement the function');
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  throw new Error('Remove this line and implement the function');
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  throw new Error('Remove this line and implement the function');
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  throw new Error('Remove this line and implement the function');
}