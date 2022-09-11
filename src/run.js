const { removeKnackAppDuplicates, cleanMockData } = require('./lib.js');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '../output', 'clean_application.json');
const MOCK_DATA_PATH = path.join(__dirname, '../data', 'mock_application.json');

cleanMockData(MOCK_DATA_PATH, OUTPUT_PATH);