import React from 'react'

const Note = ({ note, index, delNote, openModal }) => {
  const handleDelete = () => {
    delNote(index)
  }
  const handleEdit = () => {
    note.index = index
    openModal(note)
  }
  return (
    <div className='note'>
      <div>
        <p>{note.title}</p>
        <div>
          <i className='fas fa-pen fa-sm' onClick={handleEdit}></i>
          <i className='fas fa-trash fa-sm' onClick={handleDelete}></i>
        </div>
      </div>
      {/* Must sanitise markdown input to prevent XSS*/}
      <p
        dangerouslySetInnerHTML={{
          __html: note.body,
        }}
      ></p>
      <p>
        <span>Created: {note.date}</span>
        {note.editedDate && <span> Edited: {note.editedDate}</span>}
      </p>
    </div>
  )
}

export default Note
