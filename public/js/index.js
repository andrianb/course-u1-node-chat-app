
var socket = io();

socket.on('connect', function() {
    console.log('con to server');

    socket.emit('createMessage', {
        to: 'mike@exemple.com',
        text: 'hey. how are you'
    });
});

socket.on('disconnect', function() {
    console.log('dicon from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});