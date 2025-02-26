// You need to implement the Playlist constructor function and its prototype method

function Playlist() {
    // Initialize songs property
  this.songs = []
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function(song){
  this.songs.push(song);
  return this.songs;
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { song } = JSON.parse(input);
  const playlist = new Playlist();
  playlist.addSong(song);
  process.stdout.write(JSON.stringify(playlist.songs));
});
