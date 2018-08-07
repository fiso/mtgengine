'use strict';
const Constants = require('../../../Constants');
const PitScorpionBase = require('../setPZ2/PitScorpion');

class PitScorpion extends PitScorpionBase {
  constructor (game) {
    super(game, 'Pit Scorpion', 'Fifth Edition', '5ED');
  }
}

module.exports = PitScorpion;
