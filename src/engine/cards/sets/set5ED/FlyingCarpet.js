'use strict';
const Constants = require('../../../Constants');
const FlyingCarpetBase = require('../setME4/FlyingCarpet');

class FlyingCarpet extends FlyingCarpetBase {
  constructor (game) {
    super(game, 'Flying Carpet', 'Fifth Edition', '5ED');
  }
}

module.exports = FlyingCarpet;
