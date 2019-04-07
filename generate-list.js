const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "public/sounds/");
const filedest = path.join(__dirname, "src/sounds.json");

let sounds = fs
  .readdirSync(dirPath)
  .filter(filename => (filename[0] === "." ? false : filename))
  .map(filename => filename.substr(0, filename.length - 4));
let text = JSON.stringify(sounds, null, "  ");
fs.writeFileSync(filedest, text);
console.log(`Sounds: \n***\n${text}\n***\n`);
