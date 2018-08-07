'use strict';
const Constants = require('../../../Constants');
const HolyStrengthBase = require('../setM11/HolyStrength');

class HolyStrength extends HolyStrengthBase {
  constructor (game) {
    super(game, 'Holy Strength', 'Unlimited Edition', '2ED');
  }
}

module.exports = HolyStrength;
