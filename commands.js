var fs = require('fs');

var commands = {

    pwd: function() {
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');


    },

    date: function() {
        process.stdout.write(Date());
        process.stdout.write('\nprompt > ');

    },

    ls: function() {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            });
            process.stdout.write("prompt > ");
        });
    },

    echo: function(args) {
        process.stdout.write(args);
        process.stdout.write('\nprompt > ');

    }

};

module.exports = commands;
