let fs = require('fs');

let c1 = "";
let c2 = "";
let c3 = "";
let c4 = "";

fs.readFile('teste.txt', 'utf8', (err, contents) => {
    c1=contents
    console.log(contents);

    fs.readFile('teste2.txt', 'utf8', (err, contents) => {
        c2=contents
        console.log(contents);

        fs.readFile('teste3.txt', 'utf8', (err, contents) => {
            c3=contents
            console.log(contents);

            fs.readFile('teste4.txt', 'utf8', (err, contents) => {
                c4=contents
                console.log(contents);
                console.log(`${c1} - ${c2} - ${c3} - ${c4}`)


            });
        });
    });
});