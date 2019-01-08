import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ itemStyle, frontpage, children }) => {
  const modifier = frontpage ? `__frontpage` : ``
  return (
    <li className={`list${modifier}`}>
      <span className={`list--bullet${modifier}`}>{itemStyle}</span>
      <span className="list--content">{children}</span>
    </li>
  )
}

ListItem.propTypes = {
  itemStyle: PropTypes.string,
  frontpage: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

ListItem.defaultProps = {
  itemStyle: `*`,
  frontpage: false,
}

export default ListItem
