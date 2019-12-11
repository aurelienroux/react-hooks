import React, { useState } from 'react'

export const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addSong(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Song name here:</label>
      <input
        type="text"
        value={title}
        required
        onChange={e => setTitle(e.target.value)}
      />
      <input type="submit" value="add song" />
    </form>
  )
}
