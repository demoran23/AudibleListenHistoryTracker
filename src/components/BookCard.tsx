import { Component } from 'solid-js';
import { Book } from 'store/books';

export interface BookCardProps {
  book: Book;
}
export const BookCard: Component<BookCardProps> = ({ book }) => {
  return <>{book.title}</>;
};
