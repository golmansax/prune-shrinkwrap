#!/usr/bin/env node
/* eslint-disable no-console */

var pruneShrinkwrap = require('./').pruneShrinkwrap;

var shrinkwrapPath = './npm-shrinkwrap.json';

var packagesToRemove = process.argv.slice(2);
if (packagesToRemove.length <= 0) {
  console.error('Need to specify packages to remove');
  process.exit(1);
}

pruneShrinkwrap(shrinkwrapPath, packagesToRemove);
console.log('Successfully removed following shrinkwrap packages: ' + packagesToRemove.join(', '));
