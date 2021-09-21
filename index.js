let express = require('express');
let socket = require('socket.io');

//App setup
const port = process.env.PORT || 3000;
let app = express();
let server = app.listen(port, ()=>  {console.log('listening to request on port ' + port)});

//Static files
app.use(express.static('public'));

//socket setup

let io = socket(server);
io.on('connection',(socket)=>{
    console.log('made socket connection',socket.id);
    socket.on('chat',(data)=>{
        socket.broadcast.emit('chat',data);
    });
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    });
}); 



