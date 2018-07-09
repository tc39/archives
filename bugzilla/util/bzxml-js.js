const convert = require('xml-js');
const fs = require('fs');
const _ = require('lodash');

const defaults = {
  unusedFields: [
    'cclist_accessible',
    'classification_id',
    'classification',
    'comment_sort_order',
    'reporter_accessible',
    'keywords',
    'status_whiteboard',
    'isprivate',             // This is an attribute of long_desc
  ],
  integerFields: [
    'blocked',
    'bug_id',
    'commentid',
    'comment_count',
    'dependson',
    'dup_id',
  ],
  booleanFields: [
    'everconfirmed'
  ],
  arrayFields: [
    'long_desc',
    'attachment'
  ]
};

/** Depth-first post-order traversal of collection, returning false from callback will prevent further siblings from being traversed */
// Unfortunately, this code is more fragile than hoped. Care must be taken with callbacks, good enough for now.
// (TODO: Chaining of mutation functions should propagate updated state =/ , good enough for now.
const deepEach = (collection, f) => {
  const r = (val, key, parent) => {
    if(_.isObjectLike(val)) {
      _.each(val, r);
    }
    return f(val, key, parent);
  };
  r(collection);
  return collection;
};

// Must be applied before any flattening of text fields.
const convertUsers = (options, obj, key, p) => {
  if(key === "who" || key === "assigned_to" || key === "reporter") {
    const user = { uid: obj._text };
    if(obj._attributes && obj._attributes.name) {
      user.name = obj._attributes.name;
    }
    p[key] = user;
  }
  return true;
};

const flattenTextNodes = (options, val, key, parent) => {
  if(_.isObjectLike(val)) {
    if("_text" in val && Object.keys(val).length === 1) {
      parent[key] = val._text;
    }
  }
  return true;
};

const stripEmptyValues = (options, val, key, p) => {
  if(val === '---' || _.size(val) === 0) { delete p[key]; }
  return true;
};

const convertIntegerFields = (options, val, key, p) => {
  if(options.integerFields.includes(key)) { p[key] = Number(p[key]); }
  return true;
};

const convertBooleanFields = (options, val, key, p) => {
  if(options.booleanFields.includes(key)) { p[key] = Boolean(Number(p[key])); }
  return true;
};

const expandArrayFields = (options, val, key, p) => {
  if(options.arrayFields.includes(key) && !Array.isArray(p[key])) {
    p[key] = [p[key]];
  }
  return true;
};

const removeUnusedFields = (options, val, key, p) => {
  if(options.unusedFields.includes(key)) { delete p[key]; }
  return true;
};

const bzxml2js = function(xml, options = {}) {
  const config = { ...defaults, ...options };
  const obj = convert.xml2js(xml, {compact: true, ignoreDeclaration: true, ignoreDoctype: true});

  const mutate = _([
    convertUsers,
    flattenTextNodes,
    convertIntegerFields,
    convertBooleanFields,
    removeUnusedFields,
    stripEmptyValues,
    expandArrayFields,
  ]).overEvery()
    .partial(config)
    .value();
  return deepEach(obj.bugzilla, mutate);
};

const xmlfile2js = function(name) {
  const xml = fs.readFileSync(name, 'utf8');
  return bzxml2js(xml);
};

module.exports = { xmlfile2js: xmlfile2js, bzxml2js: bzxml2js, defaults: defaults };
