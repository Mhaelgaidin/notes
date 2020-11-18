const Navbar = ({ openModal }) => {
  return (
    <nav>
      <h1>MyNote</h1>
      <button className='navItem' onClick={openModal}>
        <span>New Note </span>
        <i className='fas fa-feather-alt'></i>
      </button>
    </nav>
  )
}

export default Navbar
