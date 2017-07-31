var fs = require('fs');

var commands = {

    pwd: function(fileName) {
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
    },

    date: function(fileName) {
        process.stdout.write(Date());
        process.stdout.write('\nprompt > ');

    },

    ls: function(fileName) {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            });
            process.stdout.write("prompt > ");
        });
    },

    echo: function(fileName) {
        process.stdout.write(fileName);
        process.stdout.write('\nprompt > ');

    },

    cat: function(fileName) {
        fs.readFile(fileName, 'utf8', function (err, data)  {
            if (err) throw err;
            console.log(data);
        });
        process.stdout.write('\nprompt > ');
    }, 

    head: function(fileName) {

    },

    tail: function(fileName) {

    }

};

module.exports = commands;
