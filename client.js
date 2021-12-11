import net  from 'net';

var sock = net.connect(5001)

process.stdin.pipe(sock)
sock.pipe(process.stdout)

sock.on('connect', function () {
  process.stdin.resume();
  process.stdin.setRawMode(true)
})

// process.stdin.on('data', function (b) {
//   if (b.length === 1 && b[0] === 4) {
//     process.stdin.emit('end')
//   }
// })