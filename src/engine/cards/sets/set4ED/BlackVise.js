'use strict';
const Constants = require('../../../Constants');
const BlackViseBase = require('../setMPS/BlackVise');

class BlackVise extends BlackViseBase {
  constructor (game) {
    super(game, 'Black Vise', 'Fourth Edition', '4ED');
  }
}

module.exports = BlackVise;
