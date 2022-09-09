import { removeDuplicates } from './lib';
import { promises as fs } from 'fs';

async function readSampleAndRemoveDuplicates() {
  //todo functionality;
  const jsonSample = await fs.readFile('../data/applicationSchema.json');
  console.log(jsonSample);
};

readSampleAndRemoveDuplicates();