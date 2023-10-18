const { nanoid } = require("nanoid");
//nanoid is a method from the "nanoid" package

const inform = console.log;

function create(characters, characterName,personalityType = "Unknown",favoriteColor = "Unknown",charAbility = "Unknown",charAge = "Unknown"){
    //remember that characters is the array in the data folder
    const character = { name: characterName,
                        id: nanoid(4),
                        personality: personalityType,
                        favColor: favoriteColor,
                        ability: charAbility,
                        age: charAge
                      };
    //character is a new variable initiated inside of this function that represents an object with several keys
    //the id key has the nanoid method as a value. This will generate a random id with a length of (4).
    characters.push(character);
    //this pushes the new object into the characters array in the data folder
    return characters;
    //this returns the array 
}

function index(characters) {
    return characters.map((character) => character.id + ' ' + character.name).join('\n');
}

function show(characters, characterId) {
    const character = characters.find((character) => character.id === characterId);
    return character.id + '\n' + ' Name: ' + character.name + '\n' + ' Personality: ' + character.personality + '\n' + ' Favorite Color: ' + character.favColor + '\n' + ' Ability: ' + character.ability + '\n' + ' Age: ' + character.age +'.';
}

function fakeDelay(displayVal) {
    inform("Fetching data");

    setTimeout(() => {
      inform(".");
    }, 500);
  
    setTimeout(() => {
      inform(".");
    }, 1000);
  
    setTimeout(() => {
      inform(".");
    }, 1500);
  
    setTimeout(() => {
      inform(" ")
      inform("Data fetched")
      inform(" ");
    }, 2000);
  
    setTimeout(() => {
      inform(displayVal);
    }, 2000);
}

function destroy(characters, characterId) {
    const index = characters.findIndex((character) => character.id === characterId);
    if (index > -1) {
      characters.splice(index, 1);
      inform('Character successfully removed from collection!');
      setTimeout(() => {
        inform("I'm not next...right?");
      }, 3000);
      return characters;
    } else {
      inform('Character not found. No action taken. Phew!');
      return characters;
    }
  }

  function obliterate(characters) {
    if (characters.length > 0){
      characters.splice(0, Infinity)
      
      inform('Everything successfully removed from collection!');
      setTimeout(() => {
        inform("I'm not next...right?");
      }, 3000);
      return characters;
    } else {
      inform('Characters not found. No action taken. Phew!');
      return characters;
    }
  }

  function edit(characters, characterId, newName, newPersonality, newFavColor, newAbility, newAge) {
    const index = characters.findIndex((character) => character.id === characterId);
    if (index > -1) {
      characters[index].name = newName;
      characters[index].personality = newPersonality;
      characters[index].favColor = newFavColor;
      characters[index].ability = newAbility;
      characters[index].age = newAge;
      inform('Character successfully updated');
      return characters;
    } else {
      inform('Character not found. No action taken');
      return characters;
    }
  }

  function cartMessage(totalCharacters,characters){
    const max = characters.length -1
    const min = 0
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    setTimeout(() => {
        inform(`You have a total of ${totalCharacters} characters created so far. I've got a bad feeling about "${characters[randomInt].name}" though. I'd watch that one if I were you...`);
      }, 3000);
  }



module.exports = {
    create,
    index,
    show,
    fakeDelay,
    destroy,
    obliterate,
    edit,
    cartMessage
}