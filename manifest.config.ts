import { defineManifest } from '@crxjs/vite-plugin';
import packageJson from './package.json';

const { version } = packageJson;

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = '0'] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, '')
  // split into version parts
  .split(/[.-]/);

export default defineManifest(async (env) => ({
  action: {
    default_popup: 'index.html',
  },
  background: {
    service_worker: 'src/background',
    type: 'module',
  },
  content_scripts: [
    {
      matches: [
        '*://audible.com/account/listen-history*',
        '*://www.audible.com/account/listen-history*',
      ],
      js: ['src/content_scripts/audible.com'],
      run_at: 'document_end',
      all_frames: false,
    },
  ],
  description: 'Search nyaa.si',
  host_permissions: ['https://*/*', 'http://*/*'],
  permissions: ['tabs', 'storage', 'alarms'],
  options_page: 'options_page.html',
  manifest_version: 3,
  name: 'Audible Listen History Tracker',
  version: '1.0',
}));