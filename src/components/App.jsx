import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <p>You can add new contacts </p>
      <ContactForm />
      <p>Your Contacts:</p>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
