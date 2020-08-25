let args = process.argv.slice(2);
args = args.filter(n => n > 0);
for (let num of args) {
  num = parseInt(num);
  let time = num * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
    let alarmAnn = `Alarm at ${num} seconds! \n`;
    process.stdout.write(alarmAnn);
  }, time);
}