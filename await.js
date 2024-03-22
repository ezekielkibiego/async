const fs = require('fs').promises;

console.log('start...');
async function readFile() {
    try {
        const data = await fs.readFile('notes.txt', 'utf8');
        console.log('file contents:', data);
    } catch (error) {
        console.log('Error reading file:', error);
    }
}

readFile();

console.log('end...');