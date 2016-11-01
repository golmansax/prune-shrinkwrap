#!/usr/bin/env node
/* eslint-disable no-console */

const pruneShrinkwrap = require('./').pruneShrinkwrap;
const path = require('path');
const shrinkwrapPath = './npm-shrinkwrap.json';

const packagesToRemove = process.argv.slice(2);
if (packagesToRemove.length <= 0) {
  console.error('Need to specify packages to remove');
  process.exit(1);
}

pruneShrinkwrap(shrinkwrapPath, packagesToRemove);
