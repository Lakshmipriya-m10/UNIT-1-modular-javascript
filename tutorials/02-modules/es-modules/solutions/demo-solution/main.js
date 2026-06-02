/**** ES MODULES: SOLUTION ****/

/*
    While CommonJS (require) is standard in traditional Node.js environments, 
    modern JavaScript uses a cleaner, native system called ES Modules 
    (ECMAScript Modules). This system uses the export and import keywords.

    The Package Configuration: By default, Node.js expects CommonJS syntax. 
    To tell your computer that you want to use modern ES Modules, you must 
    open your project's package.json file and add a key-value configuration 
    pair: "type": "module". Without this settings flag, Node will throw an 
    error the moment it sees an import keyword.

    Named Exports: You place the export keyword directly in front of any 
    variable, function, or class you want to share. This turns it into a 
    Named Export.

    Destructured Imports: To pull those assets into another file, you use 
    import { item1, item2 } from "./file.js". This syntax uses Object 
    Destructuring behind the scenes to extract only the specific pieces of 
    code you asked for out of that file. (Note: Unlike CommonJS, ES Modules 
    require you to explicitly include the .js file extension in your 
    relative pathway string).
*/

// ES MODULE IMPORT: Destructuring the exact assets we need.
// CRITICAL: Notice the mandatory '.js' extension at the end of the path!
import { coinSound, playLaser } from "./soundEffects.js";

console.log("--- AUDIO BOARD INITIALIZED ---");
console.log(coinSound);
console.log(playLaser());
