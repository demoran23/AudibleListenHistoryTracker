import { createStore } from 'solid-js/store';

export interface Book {
  title: string;
  listenDate: string;
  id: string;
}

export interface BooksStore {
  [id: string]: Book;
}

export const [books, setBooks] = createStore<BooksStore>({});
