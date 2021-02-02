import 'whatwg-fetch';
import _ from 'underscore';

import sinon from 'sinon';
import grapesjs from './../src';

const localStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key, value) {
    delete this[key];
  }
};

global.Backbone = Backbone;
global._ = _;
global.sinon = sinon;
global.grapesjs = grapesjs;
global.localStorage = localStorage;
