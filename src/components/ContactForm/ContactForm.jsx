import React from 'react';
import styles from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getItems);

  const handleInputChange = evt => {
    const { value } = evt.currentTarget;

    evt.currentTarget.name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = evt => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    evt.preventDefault();

    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (findName) {
      return alert(`${name} is already in contacts.`);
    }
    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in contacts.`);
    }

    dispatch(addContact(contact));
    reset();
  };

  // очищение инпутов формы
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.TaskEditor} onSubmit={handleSubmit}>
      <label className={styles.TaskEditor_label}>
        Name
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={styles.TaskEditor_label}>
        Number
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="number"
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button className={styles.TaskEditor_button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
