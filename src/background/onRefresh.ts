import { ExtensionMessageEventHandler } from 'background/ExtensionMessageEventHandler';
import { keyBy } from 'lodash';
import { getListenHistory } from 'services/audible';

export const onRefresh: ExtensionMessageEventHandler = (
  msg,
  _,
  sendResponse,
) => {
  if (msg.type !== 'refresh') return false;

  refreshBooks().then(sendResponse).catch(console.error);

  return true;
};

export const refreshBooks = async () => {
  const history = await getListenHistory();
  const newBooks = keyBy(history, 'id');
  const storage = await chrome.storage.sync.get('books');
  const existingBooks = storage?.books;
  const books = { ...existingBooks, ...newBooks };
  console.log('REFRESH_BOOKS', { books, newBooks, history, existingBooks });
  await chrome.storage.sync.set({ books });
  return books;
};
