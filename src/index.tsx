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
  chrome.storage.sync.MAX_ITEMS = 5000;
  chrome.storage.sync.QUOTA_BYTES_PER_ITEM = 8192 * 10;
  chrome.storage.sync.QUOTA_BYTES = 10000000000;
  chrome.runtime.sendMessage({ type: 'refresh' }, (res: BooksStore) => {
    console.log('SETTING BOOKS', res);
    setBooks(res);
  });
}, 500);
