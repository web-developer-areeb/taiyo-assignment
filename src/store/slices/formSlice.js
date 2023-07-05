import { createSlice } from "@reduxjs/toolkit";
import { addContact, editContact, updateContact } from "./contactSlice";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    firstName: '',
    lastName: '',
    status: 'active',
    firstNameError: false,
    lastNameError: false,
  },
  reducers: {
    changeFirstName(state, action) {
      state.firstName = action.payload;
      state.firstNameError = false;
    },
    changeLastName(state, action) {
      state.lastName = action.payload;
      state.lastNameError = false;
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
    changeFirstNameError(state, action) {
      state.firstNameError = action.payload;
    },
    changeLastNameError(state, action) {
      state.lastNameError = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addContact, (state, action) => {
      state.firstName = '';
      state.lastName = '';
      state.status = 'active';
      state.firstNameError = false;
      state.lastNameError = false;
    });
    builder.addCase(updateContact, (state, action) => {
      state.firstName = '';
      state.lastName = '';
      state.status = 'active';
      state.firstNameError = false;
      state.lastNameError = false;
    });

    builder.addCase(editContact, (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.status = action.payload.status;
      state.firstNameError = false;
      state.lastNameError = false;
    })
  }
});

export const { changeFirstName, changeLastName, changeStatus, changeFirstNameError, changeLastNameError } = formSlice.actions;
export const formReducer = formSlice.reducer;