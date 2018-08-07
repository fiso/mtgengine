'use strict';
const Constants = require('../../../Constants');
const FirebreathingBase = require('../setM12/Firebreathing');

class Firebreathing extends FirebreathingBase {
  constructor (game) {
    super(game, 'Firebreathing', 'Fifth Edition', '5ED');
  }
}

module.exports = Firebreathing;
