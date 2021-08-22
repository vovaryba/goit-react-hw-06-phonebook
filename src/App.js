import ContactsList from './components/ContactsList';
import Form from './components/Form';
import Filter from './components/Filter';

function App() {
  //   useEffect(() => {
  //     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //     if (parsedContacts) {
  //       setContacts(parsedContacts);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }, [contacts]);

  return (
    <>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
}

export default App;
