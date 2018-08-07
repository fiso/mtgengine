'use strict';
const Constants = require('../../../Constants');
const ClayStatueBase = require('../setME4/ClayStatue');

class ClayStatue extends ClayStatueBase {
  constructor (game) {
    super(game, 'Clay Statue', 'Fourth Edition', '4ED');
  }
}

module.exports = ClayStatue;
