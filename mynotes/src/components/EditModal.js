import React, { useState } from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'
import TurndownService from 'turndown'

const EditModal = ({ close, updateNotes, editNote }) => {
  const turndownService = new TurndownService()
  const [title, setTitle] = useState(editNote.title)
  const [body, setBody] = useState(turndownService.turndown(editNote.body))
  const bodyChange = (event) => {
    setBody(event.target.value)
  }
  const titleChange = (event) => {
    setTitle(event.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    updateNotes({
      title: title,
      body: DOMPurify.sanitize(marked(body)),
      date: JSON.stringify(new Date()).substring(1, 11),
      index: editNote.index,
    })
    close()
  }

  return (
    <div className='modal'>
      <form onSubmit={submitHandler} autoComplete='off'>
        <i className='fas fa-window-close' onClick={close}></i>
        <div>
          <input
            type='text'
            placeholder='Title...'
            name='title'
            required
            value={title ? title : ''}
            onChange={titleChange}
          />
        </div>
        <div>
          <textarea
            name='note'
            placeholder='Enter your note here'
            required
            value={body ? body : ''}
            onChange={bodyChange}
          ></textarea>
        </div>
        <button>
          <i className='fas fa-check'></i>
        </button>
      </form>
    </div>
  )
}

export default EditModal
