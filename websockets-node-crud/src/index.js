import express from 'express';
import { Server as WebSocketServer } from 'socket.io';
import http from 'http';
import { v4 as uuid } from 'uuid';

const app = express();
const httpServer = http.createServer(app);

const io = new WebSocketServer(httpServer);

const notes = [];

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  socket.on('client:newnote', newNote => {
    const note = { ...newNote, id: uuid() };
    notes.push(note);
  });
});

httpServer.listen(3001);
