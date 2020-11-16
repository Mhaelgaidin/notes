import NoteNav from './NoteNav'

const Navbar = ({ notes, delNote, openModal }) => {
  return (
    <nav>
      <div className='navItem'>
        <i className='fas fa-plus' onClick={openModal}></i>
      </div>
      <div className='noteList'>
        {notes.map((note, index) => (
          <NoteNav note={note} key={index} delNote={delNote} index={index} />
        ))}
      </div>
    </nav>
  )
}

export default Navbar
