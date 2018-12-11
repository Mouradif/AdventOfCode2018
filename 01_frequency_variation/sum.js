const fs = require('fs');

let operate = async (line) => {
    
};
fs.readFile('input', 'utf-8', (err, data) => {
    const lines = data.split('\n');
    let frequency = 0;
    for (let i = 0, len = lines.length; i < len; i++) {
        let line = lines[i].trim();
        if (line.length == 0)
            continue;
        frequency += parseInt(lines[i]);
    }
    console.log(frequency);
});


