import { useSelector, useDispatch } from "react-redux";
import { editContact, removeContact, updateContact } from "../store";
import { Link, useNavigate } from "react-router-dom";


function ContactList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { contacts, name } = useSelector(({form, cars: {data, searchTerm}}) => {
  // const { contacts } = useSelector(({contacts: {data}}) => {
  //   const filteredContacts =  data.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()));

  //   return {
  //     cars: filteredCars,
  //     name: form.name
  //   }
  // });

  const contacts  = useSelector(state => state.contacts);

  const handleContactDelete = (contact) => {
    dispatch(removeContact(contact.id));
  };

  const handleUpdateContact = (contact) => {
    dispatch(editContact(contact));
    navigate(`/contact/${contact.id}`)
  };

  const renderedContacts = contacts.data.map((contact) => {
    return (
      <div key={contact.id} className="border rounded-md pl-4 py-4">
        <p className="font-semibold pb-6 border-b">
          <span className="mr-1">{contact.firstName}</span>
          <span>{contact.lastName}</span>
        </p>
        <p className="flex justify-between pr-8 mt-4">
          <span>Status</span>
          <span>{contact.status === "active"? "Active": "Inactive"}</span>
        </p>
        <div className="pt-4">
          <button onClick={() => handleUpdateContact(contact)} className="bg-gray-100 hover:bg-gray-200 px-8 py-2 border rounded-md mr-4" >
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 px-8 py-2 border rounded-md text-white" onClick={() => handleContactDelete(contact)}>
            Delete
          </button>
        </div>
      </div>
    )
  });

  return (
    <div className="grid grid-cols-2 gap-8">
      {renderedContacts}
    </div>
  );
}

export default ContactList;
