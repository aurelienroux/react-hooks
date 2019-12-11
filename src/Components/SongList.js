import React, { useState } from 'react'
import uuid from 'uuid/v1'
import { NewSongForm } from './NewSongForm'

export const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Song 1', id: uuid() },
    { title: 'Song 2', id: uuid() },
    { title: 'Song 3', id: uuid() }
  ])

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }])
  }

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>

      <NewSongForm addSong={addSong} />
    </div>
  )
}
