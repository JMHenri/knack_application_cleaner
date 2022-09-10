const { removeKnackAppDuplicates } = require('./lib.js');
const fs = require('fs').promises;
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '../output', 'clean_application.json');
const MOCK_DATA_PATH = path.join(__dirname, '../data', 'mock_application.json');


async function cleanMockData() {
  const JSONSample = JSON.parse(await fs.readFile(MOCK_DATA_PATH, 'utf-8'));
  const cleanJSON = removeKnackAppDuplicates(JSONSample);
  await fs.writeFile(OUTPUT_PATH, JSON.stringify(cleanJSON));
};


module.exports = {cleanMockData, OUTPUT_PATH}

cleanMockData();