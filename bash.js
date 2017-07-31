//console.log(Object.keys(process));

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim(); // removes newline
  if (cmd === "pwd") {
    process.stdout.write(process.cwd())
  } else if (cmd === "date") {
    process.stdout.write(Date());
  }
  process.stdout.write('\nprompt > ');
  
});
