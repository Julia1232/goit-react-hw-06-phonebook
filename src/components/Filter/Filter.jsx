import React from 'react';
// import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);

  const handleInput = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <div>
      Find contacts by name
      <input
        type="text"
        placeholder="Find contacts by name"
        value={filterName}
        onChange={handleInput}
      />
    </div>
  );
};

export default Filter;
