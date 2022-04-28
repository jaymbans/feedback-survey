import PropTypes from 'prop-types';


function Card({ children, reverse }) {
  // return (
  //   <div className={`card ${reverse && 'reverse'}`}>
  //     {children}
  //   </div>
  // )
  return (
    <div className="card" style={{
      backgroundColor: reverse ? 'rgb(0,0,0)' : 'white',
      color: reverse ? 'white' : 'black'
    }}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card
