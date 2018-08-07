'use strict';
const Constants = require('../../../Constants');
const ForkBase = require('../setME4/Fork');

class Fork extends ForkBase {
  constructor (game) {
    super(game, 'Fork', 'Unlimited Edition', '2ED');
  }
}

module.exports = Fork;
