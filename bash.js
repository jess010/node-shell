//console.log(Object.keys(process));


var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
    var cmd = data.toString().trim(); // removes newline

    var args = cmd.split(' ').slice(1).join(' ');

    if (cmd === "pwd") {
        commands.pwd();
    } else if (cmd === "date") {
        commands.date();
    } else if (cmd === "ls") {
        commands.ls(args);
    } else if (cmd === "echo" + ' ' + args) {
        commands.echo(args);
    } else if (cmd === "cat" + ' ' + args) {
        commands.cat(args);
    }

});
