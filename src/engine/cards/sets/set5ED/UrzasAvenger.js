'use strict';
const Constants = require('../../../Constants');
const UnimplementedCard = require('../../UnimplementedCard');

class UrzasAvenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Avenger", 'Fifth Edition', '5ED');
  }
}

module.exports = UrzasAvenger;
