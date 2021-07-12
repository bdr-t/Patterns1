const fs = require("fs");
const path = require("path");

const inbox = path.join(__dirname, "inbox");
const outbox = path.join(__dirname, "outbox");
const reverseText = str =>
  str
    .split("")
    .reverse()
    .join("");


fs.readdir(inbox, async (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => readFile(file))
});

function readFile(file) {
  fs.readFile(path.join(inbox, file), "utf8", (error, data) => {
    if (error) return console.log("Error: File error");
    writeFile(file, data)
  });
}

function writeFile(file, data) { 
  fs.writeFile(path.join(outbox, file), reverseText(data), error => {
    if (error) return console.log("Error: File could not be saved!");
    console.log(`${file} was successfully saved in the outbox!`);
  });
}
