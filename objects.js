var playlist = { artistNames: "songTitles" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(songTitle, artistName) {
  delete playlist.artistName
  return playlist
}

