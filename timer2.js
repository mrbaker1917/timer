console.log("Welcome to my timer! Push 'b' to make a sound.");
console.log("Press any number key and the timer will go off in that many seconds");
console.log("To exit the app, press 'control' + 'c'.");
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === "b") {
    process.stdout.write('\x07');
  } else if (typeof parseInt(key) === 'number') {
    let num = parseInt(key);
    console.log(`Setting timer for ${num} seconds!`);
    let time = num * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
      let alarmAnn = `Alarm at ${num} seconds! \n`;
      process.stdout.write(alarmAnn);
    }, time);
  }

  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});

