// const fs = require('fs');

// console.log('Start');
// fs.readFile('notes.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err)
//         return;
//     }
//     console.log('File contents:', data);
// });

// console.log('End');


console.log('Start');
setTimeout(() => {
    console.log('Inside setTimeout');
}, 5000);
console.log('End');
