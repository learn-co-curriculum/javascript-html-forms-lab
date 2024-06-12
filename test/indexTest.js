require ( './helpers.js' );

const chai = require('chai');
const expect = chai.expect;

const fs = require('fs');
const path = require('path');

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');

describe('index.js', () => {});