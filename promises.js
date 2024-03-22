
console.log('start...');
const fs = require('fs').promises;

function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('notes.txt', 'utf8')
        .then(data => resolve(data))
        .catch(error => reject(error));
    })
}

readFile()
.then(data => console.log('File data:', data))
.catch(error => console.error('Error reading file:', error));

console.log('end...');


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('start...');
delay(3000).then(() => {
    console.log('Inside the promise');

});

console.log('end...');

