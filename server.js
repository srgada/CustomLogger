import net from 'net';
import repl from 'repl';

net.createServer(function (socket) {
  var r = repl.start({
      prompt: 'Node.js via TCP socket> '
    , input: socket
    , output: socket
    , terminal: true
    , useGlobal: false
  })
  r.on('exit', function () {
    socket.end()
  })
}).listen(5001);