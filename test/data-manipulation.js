const fs = require('fs');
const { removeKnackAppDuplicatesnackAppDuplicates } = require('../src/lib.js');
const path = require('path');
const {fileURLToPath} = require('url');
const chai = require('chai');
const run = require('../src/run.js');
const rewire = require('rewire');
const run_rewire = rewire('../src/run');


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('duplicate detection', function() {
  it('should detect version duplicates', function() {
    const versionJSON = JSON.parse(fs.readFileSync(path.join(__dirname, './test_data/mock_application_version_duplicates.json'), 'utf-8'));
    chai.assert.equal(versionJSON.versions.length, 2);
    const cleanJSON = removeKnackAppDuplicates(versionJSON);
    chai.assert.equal(cleanJSON.versions.length, 1);
  });
  it('should detect object duplicates', function() {
    const objectJSON = JSON.parse(fs.readFileSync(path.join(__dirname, './test_data/mock_application_object_duplicates.json'), 'utf-8'));
    chai.assert.equal(objectJSON.versions[0].objects.length, 2);
    const cleanJSON = removeKnackAppDuplicates(objectJSON);
    chai.assert.equal(cleanJSON.versions[0].objects.length, 1);
  });
  it('should detect field duplicates', function() {
    const fieldJSON = JSON.parse(fs.readFileSync(path.join(__dirname, './test_data/mock_application_field_duplicates.json'), 'utf-8'));
    chai.assert.equal(fieldJSON.versions[0].objects[0].fields.length, 2);
    const cleanJSON = removeKnackAppDuplicates(fieldJSON);
    chai.assert.equal(cleanJSON.versions[0].objects[0].fields.length, 1);
  });
});

describe('Duplicate remover', function() {
  before(function() {
    this.test_input_path = (__dirname, './test_data/mock_application_field_duplicates.json');
    this.test_output_path = path.join(__dirname, './test_output/clean_application.json');
    run_rewire.__set__('MOCK_DATA_PATH', this.test_input_path);
    run_rewire.__set__('OUTPUT_PATH', this.test_output_path);
    run.cleanMockData();
  });
  after(function() {
    fs.unlinkSync(this.test_output_path);
  });
  it('prints output to output path', function() {
    let exists = fs.existsSync(this.test_output_path);
    let hasContent = (fs.readFileSync(this.test_output_path).length > 1);
    chai.assert.equal(exists, true);
    chai.assert.equal(hasContent, true);
  });
});