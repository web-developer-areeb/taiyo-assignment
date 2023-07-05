import { configureStore } from "@reduxjs/toolkit";
import {
  // changeSearchTerm,
  contactsReducer,
  addContact,
  editContact,
  updateContact,
  removeContact,
} from "./slices/contactSlice";

import {
  changeFirstName,
  changeLastName,
  changeStatus,
  changeFirstNameError,
  changeLastNameError,
  formReducer
} from "./slices/formSlice";

import { covidCasesReducer } from "./slices/covidCasesSlice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    form: formReducer,
    covidCases: covidCasesReducer
  },
});

export {
  store,
  changeFirstName,
  changeLastName,
  changeStatus,
  addContact,
  updateContact,
  editContact,
  removeContact,
  changeFirstNameError,
  changeLastNameError
  // changeSearchTerm,
};


export * from './thunks/fetchCovidCases';
