/**** USING MODULES WITH CLASSES: PRACTICE SOLUTION ****/

/*
    Practice separating class blueprints into dedicated files and importing 
    them across complex directory structures.
*/

/*
    TODO: Import the Warrior class
*/
import { Warrior } from "./classes/Warrior.js";
/*
    TODO: Instantiate a new warrior named Arthur, then switch his stance and
    log the result.
*/
const name = new Warrior("Arthur");
console.log(name.switchStance("Aggressive")); // o/p : Arthur shifts into an Aggressive stance.
console.log(name.switchStance("Aggressive")); // o/p : Arthur shifts into an Defensive stance.
console.log(name.switchStance("aggressive")); // o/p : Arthur shifts into an Aggressive stance.