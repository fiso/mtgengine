'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class TimberWolves extends UnimplementedCard {
  constructor (game) {
    super(game, 'Timber Wolves', 'Fourth Edition', '4ED');
  }
}

module.exports = TimberWolves;
