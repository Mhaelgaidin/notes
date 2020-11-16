const NoteNav = ({ note, index, delNote }) => {
  const handleDelete = () => {
    delNote(index)
  }

  return (
    <div className='noteNav'>
      <p>{note.title}</p>
      <div>
        <i className='fas fa-pen fa-sm'></i>
        <i className='fas fa-trash fa-sm' onClick={handleDelete}></i>
      </div>
    </div>
  )
}

export default NoteNav
