/**** DEEP INHERITANCE: PRACTICE ****/

/*
    Practice passing data across multi-generational construction links 
    to compile complex structural variations.
*/

/** EXERCISE 1: THE ULTIMATE MOUNT HIERARCHY **/

// LEVEL 1: GRANDPARENT
class CoreVehicle {
	constructor(vesselName) {
		this.name = vesselName;
		this.speed = 10;
	}
}

// LEVEL 2: PARENT
class AirShip extends CoreVehicle {
	constructor(vesselName, flightAltitude) {
		super(vesselName);
		this.altitude = flightAltitude;
	}
}

/*
    TODO: Create a child class named 'WarAirShip' that extends 'AirShip'.
    1. The constructor should take three arguments: 'vesselName', 'flightAltitude', and 'cannonsCount'.
    2. Use 'super' to pass 'vesselName' and 'flightAltitude' directly up to the parent.
    3. Save 'cannonsCount' locally to an internal property named 'this.weaponsCount'.
*/
class WarAirShip extends AirShip{
	constructor(vesselName, flightAltitude, cannonCount){
		super(vesselName, flightAltitude);
		this.weaponCount = cannonCount;
	}
}
/* 
    TODO: Create a new ship and log a description that uses properties from all three classes.
*/
const ship1 = new WarAirShip("Thunder Hawk", "VH-202", 16);
console.log(`Vessalname is ${ship1.name} ,Flightaltitude is ${ship1.altitude} ,Speed is ${ship1.speed} and weaponcount is ${ship1.weaponCount}.`);
/** EXERCISE 2: DECODING THE RELAY ORDER **/

class BaseInventoryItem {
	constructor() {
		this.isStorable = true;
	}
}

class WeaponItem extends BaseInventoryItem {
	constructor(power) {
		super();
		this.damage = power;
	}
}

class CursedSword extends WeaponItem {
	/* 
        TODO: Fix the constructor so that it instantiates a cursed sword properly.
        You will need to fix it in more than one way!
    */
	constructor(power, curseEffect) {
		super(power);
		this.curse = curseEffect;
		
	}
}

/* 
    TODO: Create a shadow blade and log a description using properties from all classes.
*/
const weapon1 = new CursedSword (5000, "accuracy_drop");
console.log(`Base inventory item is storable ${weapon1.isStorable} is demaged by power ${weapon1.damage} and curse effect ${weapon1.curse}.`)