import { List } from '@suid/material';
import { BookCard } from 'components/BookCard';
import { values } from 'lodash';
import { Component, createMemo, For } from 'solid-js';
import { books } from 'store/books';

export const BooksList: Component = () => {
  const items = createMemo(() => values(books));
  console.log('ITEMS', items());
  return (
    <List>
      <For each={items()}>
        {(item, index) => <BookCard book={item} data-index={index()} />}
      </For>
    </List>
  );
};
