import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from 'Redux/filter/filterSelectors';

export const getContacts = store => store.contacts;

export const selectFilterSearch = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);
