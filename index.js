const {create, index, show, fakeDelay,destroy, obliterate, edit,cartMessage} = require('./src/characterController')
const {readJSONFile, writeJSONFile} = require ('./src/helpers');
const characters = readJSONFile("./data", "characters.json");
let totalCharacters = characters.length;
const inform = console.log;

function run() {
    let writeToFile = false;
    let updatedCharacters = [];

  const action = process.argv[2];
  const character = process.argv[3];
  const personality = process.argv[4];
  const favColor = process.argv[5];
  const ability = process.argv[6];
  const age = process.argv[7];
  switch (action) {
    case "index":
        const charactersView = index(characters);
        fakeDelay(charactersView);
        break;
    case "create":
        updatedCharacters = create(characters, character,personality,favColor,ability,age);
        writeToFile = true
        inform("Character created!");
        break;
    case 'show':
    const fullharactersView = show(characters,character);
    fakeDelay(fullharactersView)
      break;
    case "update":
    updatedCharacters = edit(characters, character, process.argv[8]);
    writeToFile = true;
      break;
    case 'destroy':
    updatedCharacters = destroy(characters, character);
    writeToFile = true;
      break;
    case 'obliterate':
    updatedCharacters = obliterate(characters);
    writeToFile = true;
        break;
    default:
      inform('There was an error.');
  }
  if (writeToFile) {
    writeJSONFile('./data', 'characters.json', updatedCharacters);
  } 
  cartMessage(totalCharacters,characters)
}
run();