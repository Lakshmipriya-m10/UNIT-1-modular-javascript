/**** NPM MODULES: PRACTICE ****/

/*
    Practice installing and importing community-driven open-source 
    software to inject visual aesthetics and configuration parameters.

    1. Initiate npm in this directory and view package.json
    2. Change "type" to "module" if wanting to use ES modules
    2. Install chalk and gradient (chalk@4.1.2 if using CommonJS modules)
*/

/** EXERCISE: RECONSTRUCTING THE GOLD GRADIENT REWARD **/

/*
    TODO: Use the correct syntax (CommonJS or ES) to import chalk and gradient-string
*/
import chalk from 'chalk';
import gradient from 'gradient-string';
/*
    TODO: Use 'gradient-string' to style a victory banner string.
    1. Create a variable named 'goldGradient' by passing the colors "yellow" and "orange" into the gradient tool.
    2. Apply that gradient to the string: "★ VICTORY! YOU FOUND THE ANCIENT GOLD REWARD ★"
    3. Log the stylized message to the console.
*/
const goldGradient = gradient(["yellow", "orange"]);
console.log(goldGradient('★ VICTORY! YOU FOUND THE ANCIENT GOLD REWARD ★'));