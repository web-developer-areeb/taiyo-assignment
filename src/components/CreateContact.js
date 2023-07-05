import { useDispatch, useSelector } from "react-redux";
import { addContact, changeFirstName, changeLastName, changeStatus, changeFirstNameError, changeLastNameError, updateContact } from "../store";
import { useNavigate, useParams } from "react-router-dom";


function CreateUpdateContact() {
  const {contactID} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { firstName, lastName, status, firstNameError, lastNameError } = useSelector((state) => {
    return state.form
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let error = false;
    if(firstName === ''){
      dispatch(changeFirstNameError(true));
      error = true;
    };

    if(lastName === '') {
      dispatch(changeLastNameError(true));
      error = true;
    }

    if(error) {
      return;
    }

    if(contactID){
      dispatch(updateContact({id: contactID, firstName, lastName, status}))
    } else {
      dispatch(addContact({firstName, lastName, status}));
    }

    navigate("/contact");
  }

  return (
    <div className="px-28 pt-28">
      <form className="max-w-lg border rounded p-10 flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="mr-4 text-xl" id="firstName">First Name:</label>
          <input className="border text-lg px-2 py-2 rounded w-72" htmlFor="firstName"
            value={firstName}
            onChange={(e) => {
              dispatch(changeFirstName(e.target.value))
            }}
          />
          {firstNameError && <p className="ml-[118px] mt-1 text-sm text-red-500">First Name can't be left blank.</p>}
        </div>
        <div className="mb-4">
          <label className="mr-4 text-xl" id="lastName">Last Name:</label>
          <input className="border text-lg px-2 py-2 rounded w-72" htmlFor="lastName"
            value={lastName}
            onChange={(e) => dispatch(changeLastName(e.target.value))}
          />
          {lastNameError && <p className="ml-[118px] mt-1 text-sm text-red-500">Last Name can't be left blank.</p>}
        </div>
        <div className="flex">
          <p className="text-xl">Status:</p>
          <div className="ml-14">
            <input type="radio" id="active" name="status" value="active" className="mr-2" 
              onChange={(e) => dispatch(changeStatus(e.target.value))}
              checked={status === "active"}
            />
            <label htmlFor="active" className="text-xl mb-2 cursor-pointer">Active</label><br />
            <input type="radio" id="inactive" name="status" value="inactive" className="mr-2" 
              onChange={(e) => dispatch(changeStatus(e.target.value))}
              checked={status === "inactive"}
            />
            <label htmlFor="inactive" className="text-xl mb-2 cursor-pointer">Inactive</label><br />
          </div>
        </div>
        <button className="mt-10 border px-6 py-2 rounded-md bg-green38 text-white">Save Contact</button>
      </form>
    </div>
  )
};

export default CreateUpdateContact;