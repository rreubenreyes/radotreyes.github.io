import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ itemStyle, frontpage, children }) => (
  <li>
    <div className={`list--bullet${frontpage ? `__frontpage` : ``}`}>
      {itemStyle}
    </div>
    {children}
  </li>
)

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
