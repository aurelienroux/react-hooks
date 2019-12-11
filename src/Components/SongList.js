import React, { useState } from 'react'
import uuid from 'uuid/v1'

export const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Song 1', id: uuid() },
    { title: 'Song 2', id: uuid() },
    { title: 'Song 3', id: uuid() }
  ])

  const addSong = () => {
    setSongs([...songs, { title: `song ${songs.length + 1}`, id: uuid() }])
  }

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>

      <button onClick={() => addSong()}>Add Song</button>
    </div>
  )
}
