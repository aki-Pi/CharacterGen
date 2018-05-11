////////////////////// Play - Function Constructor 
/*
var Player = function(firstName, lastName, race, classGenus, age, health, magicka, stamina, planet, introduction) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.race = race;
    this.classGenus = classGenus;
    this.age = age;
    this.health = health;
    this.magicka = magicka;
    this.stamina = stamina;
    this.planet = planet;
    this.introduction = function() {
        console.log('One hero of our story is ' + firstName + ' ' + lastName + '. They are of a ' + race + ' of the ' + classGenus + ' class, currently aged to ' + age + '. Their current stats are -- Health: ' + health + ', Magicka: ' + magicka + ', Stamina: ' + stamina + '. As with all our heroes, they reside on the planet ' + planet + '.' );
    }
}

//Player.prototype.planet = 'Xidon';

var akiPi = new Player('Aki', 'Pi', 'Zelon', 'Stealth Mage', 446, 1200, 2600, 1200, 'Xidon');
var l3mnCakes = new Player('Lemon', 'Cakes', 'Hylian', 'Archer Bard', 103, 1400, 1300, 2300, 'Xidon');
var serPounce = new Player('Ser', 'Pounce', 'Ocelcat', 'Surge Monk', 22, 2400, 200, 2400, 'Xidon');

//console.log(akiPi);


//var introduction = function() {
//    console.log('One hero of our story is ' + firstName + ' ' + lastName + '. They are of a ' + race + ' of the ' + classGenus + ' class, currently aged to ' + age + '. THeir current stats are -- Health: ' + health + ', Magicka: ' + magicka + ', Stamina: ' + stamina + '. As with all our heroes, they reside on the planet ' + planet + '.' )
//}


akiPi.introduction();
l3mnCakes.introduction();
serPounce.introduction();
*/


/*
//Function Declaration
function calculateAge(year) {
    console.log(2018 - year);
}

//Function Expression
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
*/

/////////////////////////////// Play Object.create
/*
var playerProto = {
    firstName: null,
    lastName: null, 
    race: null,
    classGenus: null,
    age: null, 
    health: null,
    magicka: null,
    stamina: null,
    planet: 'Xidon',
    introduction: function() {
        console.log('One hero of our story is ' + this.firstName + ' ' + this.lastName + '. They are of a ' + this.race + ' of the ' + this.classGenus + ' class, currently aged to ' + this.age + '. Their current stats are -- Health: ' + this.health + ', Magicka: ' + this.magicka + ', Stamina: ' + this.stamina + '. As with all our heroes, they reside on the planet ' + this.planet + '.' );
    }
};

var akiPi = Object.create(playerProto,
{
    firstName: { value: 'Aki' },
    lastName: { value: 'Pi' },
    race: { value: 'Zelon' },
    classGenus: { value: 'Stealth Mage' },
    age: { value: 446 }
});

akiPi.health = 1200;
akiPi.magicka = 2600;
akiPi.stamina = 1200;

akiPi.introduction();
*/

////////////////////// Play Passing Functions as Arguments / Functions Returning Functions

//Sentences introducing the person, and whether they're NPC or not. 
/*
var Character = function(characterSettings) {
    this.firstName = characterSettings.firstName || "";
}

var myChar = new Character({
    firstName: "Brandon"
});

var anotherChar = new Character();
anotherChar.firstName = "Matthew";
*/

/**
var Character = function(first, last, race, classes, age, health, magicka, stamina, planet, isNPC) {
    this.firstName = first;
    this.lastName = last;
    this.species = race || 'Human';
    this.classes = classes || 'Novice';
    this.age = age;
    this.hP = health || 1000;
    this.magP = magicka || 1000;
    this.stanP = stamina || 1000;
    this.planet = planet || 'Xidon';
    this.isNPC = isNPC || true;
};
**/

 /*
 var zelonIntro = introduction('Zelon');
 var hylianIntro = this.introduction('Hylian');
 var ocelcatIntro = this.introduction('Ocelcat');
*/

var Character = function(charSettings) {
    this.firstName = charSettings.firstName || '';
    this.lastName = charSettings.lastName || '';
    this.race = charSettings.race || 'Human';
    this.classes = charSettings.classes || 'Novice';
    this.age = charSettings.age || '';
    this.health = charSettings.health || 1000;
    this.magicka = charSettings.magicka || 1000;
    this.stamina = charSettings.stamina || 1000;
    this.planet = charSettings.planet || 'Xidon';
    this.isNPC = charSettings.isNPC;
}

Character.prototype.introduction = function() {
    if (this.race === 'Zelon') {
        console.log(this.firstName + ' is a Zelon. They are a little know, loner species of unknown talents.');
    } else if (this.race === 'Hylian') {
        console.log('Hylian is the species ' + this.firstName + ' hails from. These creatures worship the goddess Hylia, and have numerous physical and mystical abilities.');
    } else if (this.race === 'Ocelcat') {
        console.log('Ocelcats are a friendly social animal, quick, cunning, and inquisitive. This is the species that ' + this.firstName + ' derives from.');
    } else {
        console.log('Which race do you originate from, ' + this.firstName + '?');
    }
}

Character.prototype.npcStatus = function() {
    if (this.isNPC === false) {
        console.log('**As ' + this.firstName + ' is not an NPC, they are free to roam as they please.**');
    } else {
        this.isNPC = true;
        console.log('**Unfortunately, ' + this.firstName + ' is an NPC, so they have no soul.**');
    }
}

/**
Character.prototype.charInput = function() {
    var newCharacter = new Character({
        this.firstName = document.getElementById('first-name-input').textContent,
        this.lastName = document.getElementById('last-name-input').textContent;
        this.age = document.getElementById('age-input').textContent;
        this.race = document.getElementById('race-input').textContent;
    
    
    
    
    
        document.getElementById('first-name-input').textContent = firstNameDOM;
        document.querySelector('.x').textContent = ;
    }); 
}
**/

///// BRANDON'S CODE ////
function getCharacterFromInput() {
    return new Character({
        firstName: document.getElementById('first-name-input').value,
        lastName: document.getElementById('last-name-input').value,
        age: document.getElementById('age-input').value,
        race: document.getElementById('race-input').value
        // etc..
    });
}
////// END BRANDON'S CODE //////

document.querySelector('.btn-submit').addEventListener('click', function() {
    var myCharacter = getCharacterFromInput();
    console.log(myCharacter);
    
    document.getElementById('firstName').textContent = myCharacter.firstName;
    document.getElementById('lastName').textContent = myCharacter.lastName;
    document.getElementById('age').textContent = myCharacter.age;
    document.getElementById('race').textContent = myCharacter.race;
    
});

var akiPi = new Character({
    firstName: 'Aki',
    lastName: 'Pi',
    race: 'Zelon',
    classes: 'Stealth Mage',
    age: 446,
    health: 1200,
    magicka: 2600,
    stamina: 1200,
    isNPC: false
});

var l3mnCakes = new Character({
    firstName: 'L3MN',
    lastName: 'Cakes',
    race: 'Hylian',
    classes: 'Bard Archer',
    age: 103,
    health: 1400,
    magicka: 1300,
    stamina: 2300,
    isNPC: false
});

var serPounce = new Character({
    firstName: 'Ser',
    lastName: 'Pounce',
    race: 'Ocelcat',
    classes: 'Surge Monk',
    age: 22,
    health: 2400,
    magicka: 200,
    stamina: 2400,
    isNPC: false
});

var mystery = new Character({
    firstName: 'Mysterious',
    lastName: 'Stranger',
    race: 'Space Phantom',
});

/**
var akiPi = new Character('Aki', 'Pi', 'Zelon', 'Stealth Mage', 446, 1200, 2600, 1200, false);
var l3mnCakes = new Character('L3MN', 'Cakes', 'Hylian', 'Archer Bard', 103, 1400, 1300, 2300, false);
var serPounce = new Character('Ser', 'Pounce', 'Ocelcat', 'Surge Monk', 22, 2400, 200, 2400);
var mystery = new Character('Mysterious', 'Stranger');
**/
//akiPi.lastName = 'New';

//console.log(akiPi);

















