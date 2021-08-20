const socket = io();

const noteForm = document.querySelector('#noteForm');
const title = noteForm.querySelector('#title');
const desc = noteForm.querySelector('#description');

noteForm.addEventListener('submit', e => {
  e.preventDefault();

  socket.emit('client:newnote', {
    title: title.value,
    description: desc.value
  });
});

