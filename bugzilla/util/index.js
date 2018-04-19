#!/usr/bin/env node

const commander = require('commander');
const bzxml2js = require('./bzxml-js.js');
const getStream = require('get-stream');
const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

let xml;

commander
  .arguments("[file]")
  .action(file => {
    xml = (typeof file === 'undefined') ?
      getStream(process.stdin) :
      readFile(file, 'utf8');
  }).parse(process.argv);

xml.then(bzxml2js.bzxml2js)
   .then(JSON.stringify)
   .then(json => process.stdout.write(json, 'utf8'))

