import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    // searchTerm: "",
    data: [],
  },
  reducers: {
    // changeSearchTerm(state, action) {
    //   state.searchTerm = action.payload;
    // },
    addContact(state, action) {
      state.data.push({
      id: nanoid(), 
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      status: action.payload.status,
    });
    },
    updateContact(state, action) {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      const updatedContact = {
        ...state.data[index],
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        status: action.payload.status,
      }
      state.data.splice(index, 1, updatedContact)
    },
    editContact(state, action) {
    },
    removeContact(state, action) {
      const updated = state.data.filter((contact) => {
        return contact.id !== action.payload
      });
      state.data = updated;
    },
  },
});

export const {
  // changeSearchTerm,
  addContact,
  editContact,
  updateContact,
  removeContact
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;