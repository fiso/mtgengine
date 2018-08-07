'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class VolcanicEruption extends UnimplementedCard {
  constructor (game) {
    super(game, 'Volcanic Eruption', 'Fourth Edition', '4ED');
  }
}

module.exports = VolcanicEruption;
