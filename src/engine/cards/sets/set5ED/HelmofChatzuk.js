'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class HelmofChatzuk extends UnimplementedCard {
  constructor (game) {
    super(game, 'Helm of Chatzuk', 'Fifth Edition', '5ED');
  }
}

module.exports = HelmofChatzuk;
