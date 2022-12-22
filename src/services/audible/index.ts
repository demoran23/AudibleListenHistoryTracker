import { Book } from 'store/books';

const book = { id: 'id', listenDate: Date.now().toString(), title: 'title' };

export const getListenHistory = async (): Promise<Book[]> => {
  console.log('getListenHistory');
  return [book];
};
