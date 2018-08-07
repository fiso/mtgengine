'use strict';
const Constants = require('../../../Constants');
const HolyStrengthBase = require('../setM11/HolyStrength');

class HolyStrength extends HolyStrengthBase {
  constructor (game) {
    super(game, 'Holy Strength', 'Fifth Edition', '5ED');
  }
}

module.exports = HolyStrength;
