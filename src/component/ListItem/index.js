import React from 'react';
import PropTypes from 'prop-types';

function ListItem(props) {
  const {title, desc} = props;
  if (!title) return null;
  return (
    <div data-test='listItemComponent'>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
}

export default ListItem;
