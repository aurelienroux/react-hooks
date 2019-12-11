import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'
import { NewSongForm } from './NewSongForm'

export const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Song 1', id: uuid() },
    { title: 'Song 2', id: uuid() },
    { title: 'Song 3', id: uuid() }
  ])
  const [age, setAge] = useState(20)

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }])
  }

  useEffect(() => {
    console.log('renders songs', songs)
  }, [songs])

  useEffect(() => {
    console.log('renders age', age)
  }, [age])

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>

      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>
        click to add 1 to age: {age}
      </button>
    </div>
  )
}
