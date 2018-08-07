'use strict';
const Constants = require('../../../Constants');
const ConservatorBase = require('../set4ED/Conservator');

class Conservator extends ConservatorBase {
  constructor (game) {
    super(game, 'Conservator', 'Revised Edition', '3ED');
  }
}

module.exports = Conservator;
