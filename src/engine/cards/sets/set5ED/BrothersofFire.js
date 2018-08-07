'use strict';
const Constants = require('../../../Constants');
const BrothersofFireBase = require('../setMED/BrothersofFire');

class BrothersofFire extends BrothersofFireBase {
  constructor (game) {
    super(game, 'Brothers of Fire', 'Fifth Edition', '5ED');
  }
}

module.exports = BrothersofFire;
