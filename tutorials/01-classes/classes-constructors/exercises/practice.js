/**** CLASSES & CONSTRUCTORS: PRACTICE ****/

/*
    Practice defining foundational class blueprints and instantiating 
    independent entity profiles into memory.
*/

console.log("******* EXERCISE 1: THE ITEM INVENTORY FACTORY *******\n");

/*
    TODO: Create a class blueprint named 'GameItem'.
    1. Give it a constructor that accepts two parameters: 'itemName' and 'goldValue'.
    2. Inside the constructor, map those parameters to 'this.name' and 'this.value'.
*/
class GameItem {
    constructor(itemName, goldValue) {
        this.itemName = itemName;
        this.goldValue = goldValue;
    }
}

/*
    TODO: Instantiate two unique items using the 'new' keyword:
    1. Create a constant named 'potion' with a name of "Healing Potion" and a value of 50.
    2. Create a constant named 'shield' with a name of "Iron Shield" and a value of 150.
    Log both objects to verify their data structures.
*/

const potion = new GameItem("Healing Potion", 50);
const shield = new GameItem("Iron Shield", 150);

console.log(
    `${potion.itemName} have value of ${potion.goldValue}`);

console.log(
    `${shield.itemName} have value of ${shield.goldValue}`);    


console.log("\n******** EXERCISE 2: MOB SPAWNER VERIFICATION ********\n");

class EnemyMob {
	constructor(type, powerRating) {
		this.mobType = type;
		this.power = powerRating;
	}
}

/*
    TODO: The instantiation sequence below is completely broken and throwing errors!
    Fix the code line below so that a new EnemyMob instance is successfully generated.
*/
const eliteOrc = new EnemyMob("Orc Raider", 45);

console.log(`A hostile ${eliteOrc.mobType} has appeared! (Power: ${eliteOrc.power})`);
