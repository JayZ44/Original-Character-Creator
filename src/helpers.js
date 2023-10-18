const { readFileSync, writeFileSync } = require('fs');
//readFileSync and writeFileSync are methods that come from a pre-installed packaged named "fs" aka file system
//readFileSync allows you to read data from another file and then do what you want with it.
//writeFileSync allows you to add or "write" data into another file

function readJSONFile(path, fileName) {
  const collection = readFileSync(`${path}/${fileName}`, 'utf8');
  //reads the file at the given path/fileName. utf8 is just the encoder thingy. without it things wont work
  return collection ? JSON.parse(collection) : [];
  // if the collection exists, parse it (idk what that means but we need it) else return empty array
}

function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data);
  //since JSON files are entirely strings, you have to stringify the data in order for the file to accept it
  return writeFileSync(`${path}/${fileName}`, data, { encoding: 'utf-8' });
  //sends the stringified data to the specified path and file and with utf-8 encoding
}

module.exports = {
  readJSONFile,
  writeJSONFile
};
//exports the functions which lets them be used in other files