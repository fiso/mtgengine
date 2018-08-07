'use strict';
const Constants = require('../../../Constants');
const BreedingPitBase = require('../setDVD/BreedingPit');

class BreedingPit extends BreedingPitBase {
  constructor (game) {
    super(game, 'Breeding Pit', 'Fifth Edition', '5ED');
  }
}

module.exports = BreedingPit;
