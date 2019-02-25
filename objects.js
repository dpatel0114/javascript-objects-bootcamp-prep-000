var playlist ={
  artistName :'song title'
}

function updatePlaylist(playlist, artistName, songTitle){
  return playlist({artistName:songTitle})
}
