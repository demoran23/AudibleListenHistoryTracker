import { onRefresh, refreshBooks } from 'background/onRefresh';
import { onShowApp } from 'background/onShowApp';

for (const onMessage of [
  chrome.runtime.onMessageExternal,
  chrome.runtime.onMessage,
]) {
  for (const listener of [onShowApp, onRefresh]) {
    onMessage.addListener(listener);
  }
}

chrome.runtime.onInstalled.addListener(() => {
  console.log('background.ts', 'onInstalled');
  refreshBooks()
    .then(async () => {
      const storage = await chrome.storage.sync.get(null);
      console.log('SYNC STORAGE', storage);
    })
    .catch(console.error);
  return true;
});

chrome.alarms.create({ periodInMinutes: 60 * 24 });

chrome.alarms.onAlarm.addListener((alarm) => {
  refreshBooks().catch(console.error);
  return true;
});
