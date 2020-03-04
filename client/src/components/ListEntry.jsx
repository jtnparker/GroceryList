import React from 'react';

const ListEntry = props => (
  <li onClick={() => props.deleteList(props.item.id)}>
    {props.item.item} {props.item.quantity} {props.item.id}
  </li>
);

export default ListEntry;
