import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EditModal from './components/EditModal'
import Note from './components/Note'

function App() {
  const [notes, setNotes] = useState([])
  const [edit, setEdit] = useState(false)
  const [editNote, setEditNote] = useState({})

  const openModal = (n) => {
    if (n) {
      setEditNote(n)
    }
    setEdit(true)
  }
  const updateNotes = (newNote) => {
    let updatedNotes
    if (newNote.index || newNote.index >= 0) {
      updatedNotes = [...notes]
      updatedNotes[newNote.index] = {
        title: newNote.title,
        body: newNote.body,
        date: updatedNotes[newNote.index].date,
        editedDate: newNote.date,
      }
    } else {
      updatedNotes = [...notes, newNote]
    }
    setNotes(updatedNotes)
  }

  const closeModal = () => {
    setEditNote({})
    setEdit(false)
  }

  const delNote = (i) => {
    let updatedNotes = [...notes]
    updatedNotes.splice(i, 1)
    setNotes(updatedNotes)
  }

  useEffect(() => {
    if (localStorage.getItem('savedNotes')) {
      let savedNotes = JSON.parse(localStorage.getItem('savedNotes'))
      setNotes([...savedNotes])
    }
  }, [setNotes])

  useEffect(() => {
    localStorage.setItem('savedNotes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className='App'>
      <Navbar openModal={openModal} />
      <div className='notelist'>
        {notes.map((note, index) => (
          <Note
            note={note}
            key={index}
            index={index}
            delNote={delNote}
            openModal={openModal}
          />
        ))}
      </div>
      {edit && (
        <EditModal
          close={closeModal}
          updateNotes={updateNotes}
          editNote={editNote}
        />
      )}
    </div>
  )
}

export default App
