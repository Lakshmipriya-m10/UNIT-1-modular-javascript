/**** ES MODULES: PRACTICE SOLUTION ****/

/*
    Practice configuring modern ES Module pipelines, exporting named assets, 
    and destructuring imports from relative file pathways.
*/

/** EXERCISE: RECONFIGURING CODES TO ESM **/

/*
    Write the destructured ES Module import statement below to pull 
    'scoreMultiplier' and 'doubleScore' out of "./gameCalculations.js".
    Replace null values below, passing in 150 points for the doubleScore function.
*/
import { scoreMultiplier, doubleScore } from "./gameCalculations.js";

console.log(`Current Event Multiplier: x${scoreMultiplier}`);
console.log(`New total: ${doubleScore(150)} points!`);
