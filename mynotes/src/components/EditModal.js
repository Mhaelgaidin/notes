import React from 'react'

const EditModal = ({ close, createNote }) => {
  const submitHandler = (e) => {
    createNote({
      title: e.target.title.value,
      note: e.target.note.value,
      date: new Date(),
    })
    close()
  }
  return (
    <div className='modal'>
      <form onSubmit={submitHandler} autoComplete='off'>
        <i class='fas fa-window-close' onClick={close}></i>
        <div>
          <input type='text' placeholder='Title...' name='title' required />
        </div>
        <div>
          <textarea
            name='note'
            placeholder='Enter your note here'
            required
          ></textarea>
        </div>
        <button>
          <i class='fas fa-check'></i>
        </button>
      </form>
    </div>
  )
}

export default EditModal
