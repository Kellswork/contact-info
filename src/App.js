import { useState } from "react";
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import "./App.css";

function App() {
  // here we create an array state to store the contact form data
  const [contacts, updateContacts] = useState([]);

  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
