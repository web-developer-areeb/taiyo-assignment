import ContactList from "../components/ContactList";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="px-6 pt-10">
      <div className="flex justify-end mb-10">
        <Link
          className="border px-6 py-2 rounded-md bg-green38 text-white"
          to="/create-contact"
        >
          Create Contact
        </Link>
      </div>
      <h3 className="border-b mb-8 pb-4 text-xl font-semibold">Contacts</h3>
      <ContactList />
    </div>
  );
};

export default Contact;
