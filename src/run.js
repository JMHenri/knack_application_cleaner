import { removeDuplicates } from './lib.js';
import { promises as fs } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function readSampleAndRemoveDuplicates() {
  const JSONSample = JSON.parse(await fs.readFile(path.join(__dirname, '../data', 'mock_application.json'), 'utf-8'));
  const cleanJSON = removeDuplicates(JSONSample);

  await fs.writeFile(path.join(__dirname, '../output', 'clean_application.json'), JSON.stringify(cleanJSON));
};

readSampleAndRemoveDuplicates();