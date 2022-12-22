/* @refresh reload */
import { createTheme, ThemeProvider } from '@suid/material';
import { render } from 'solid-js/web';

import './index.css';
import { BooksStore, setBooks } from 'store/books';
import App from './App';

export const extensionId = chrome.runtime.id;
const theme = createTheme({} as any);

render(
  () => (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  ),
  document.getElementById('root') as HTMLElement,
);

setTimeout(() => {
  chrome.runtime.sendMessage({ type: 'refresh' }, (res: BooksStore) => {
    console.log('SETTING BOOKS', res);
    setBooks(res);
  });
}, 500);
