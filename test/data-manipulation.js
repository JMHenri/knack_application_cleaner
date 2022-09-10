import fs from 'fs';
import { removeDuplicates } from '../src/lib.js';
import path from 'path';
import {fileURLToPath} from 'url';
import chai from 'chai';
import run from '../src/run';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('duplicate detection', function() {
  it('should detect version duplicates', function() {
    const versionJSON = JSON.parse(fs.readFileSync(path.join(__dirname, './test_data/mock_application_version_duplicates.json'), 'utf-8'));
    chai.assert.equal(versionJSON.versions.length, 2);
    const cleanJSON = removeDuplicates(versionJSON);
    chai.assert.equal(cleanJSON.versions.length, 1);
  });
  it('should detect object duplicates', function() {
    const objectJSON = JSON.parse(fs.readFileSync(path.join(__dirname, './test_data/mock_application_object_duplicates.json'), 'utf-8'));
    chai.assert.equal(objectJSON.versions[0].objects.length, 2);
    const cleanJSON = removeDuplicates(objectJSON);
    chai.assert.equal(cleanJSON.versions[0].objects.length, 1);
  });
  it('should detect field duplicates', function() {
    const fieldJSON = JSON.parse(fs.readFileSync(path.join(__dirname, './test_data/mock_application_field_duplicates.json'), 'utf-8'));
    chai.assert.equal(fieldJSON.versions[0].objects[0].fields.length, 2);
    const cleanJSON = removeDuplicates(fieldJSON);
    chai.assert.equal(cleanJSON.versions[0].objects[0].fields.length, 1);
  });
});

describe('Duplicate remover', function() {
 it('processes JSON files correctly', function() {

 });
 describe('output', function() {
  before(function() {

  });
  after(function() {

  });
  it('prints output to correct location', function() {
    this.nextDealer_stub = sinon.stub(game, 'getNextDealerPosition');
    this.nextDealer_stub.callsFake(function() {
      return 1;
    });
  });
  it('prints expected data', function() {

  });
 });

});