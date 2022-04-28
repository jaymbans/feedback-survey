import defaultProps from 'react';

function Header({ text }) {
  return (
    <header style={{ color: 'pink' }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}


export default Header
