'use strict';
const Constants = require('../../../Constants');
const TranquilityBase = require('../setTPR/Tranquility');

class Tranquility extends TranquilityBase {
  constructor (game) {
    super(game, 'Tranquility', 'Revised Edition', '3ED');
  }
}

module.exports = Tranquility;
