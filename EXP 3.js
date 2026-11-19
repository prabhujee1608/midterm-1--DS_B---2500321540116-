const fs = require('fs');

// CREATE
fs.writeFile('demo.txt', 'Hello Node.js!', (err) => {
    if (err) throw err;
    console.log('File created successfully!');

    // READ
    fs.readFile('demo.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File Content:', data);

        // UPDATE
        fs.appendFile('demo.txt', '\nWelcome to FS Module!', (err) => {
            if (err) throw err;
            console.log('File updated successfully!');

            // READ UPDATED CONTENT
            fs.readFile('demo.txt', 'utf8', (err, updatedData) => {
                if (err) throw err;
                console.log('Updated Content:', updatedData);

                // DELETE
                fs.unlink('demo.txt', (err) => {
                    if (err) throw err;
                    console.log('File deleted successfully!');
                });
            });
        });
    });
});