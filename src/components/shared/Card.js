import React from 'react';
import PropTypes from 'prop-types';

function Card({children, reverse}) {
  return (
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    <div className="card" style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#FFF',
        color: reverse ? '#FFF' : 'rgba(0,0,0)'
    }}>{children}</div>
  )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    reverse: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default Card;