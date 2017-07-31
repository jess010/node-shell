//console.log(Object.keys(process));
var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
    var cmd = data.toString().trim(); // removes newline

    var echoArgs = cmd.split(' ').slice(1).join(' ');

    console.log(echoArgs);

    if (cmd === "pwd") {
        commands.pwd();
    } else if (cmd === "date") {
        commands.date();
    } else if (cmd === "ls") {
        commands.ls();
    } else if (cmd === "echo" + ' ' + echoArgs) {
        commands.echo(echoArgs);
    }

});
