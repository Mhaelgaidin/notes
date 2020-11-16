import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EditModal from './components/EditModal'

function App() {
  const [notes, setNotes] = useState([{ title: 'Test Note' }])
  const [edit, setEdit] = useState(false)

  const openModal = () => {
    setEdit(true)
  }
  const createNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const closeModal = () => {
    setEdit(false)
  }

  const delNote = (i) => {
    let currentnotes = [...notes]
    currentnotes.splice(i, 1)
    setNotes(currentnotes)
  }
  return (
    <div className='App'>
      <Navbar notes={notes} delNote={delNote} openModal={openModal} />
      {edit && <EditModal close={closeModal} createNote={createNote} />}
    </div>
  )
}

export default App
