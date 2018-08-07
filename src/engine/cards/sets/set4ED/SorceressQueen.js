'use strict';
const Constants = require('../../../Constants');
const SorceressQueenBase = require('../set5ED/SorceressQueen');

class SorceressQueen extends SorceressQueenBase {
  constructor (game) {
    super(game, 'Sorceress Queen', 'Fourth Edition', '4ED');
  }
}

module.exports = SorceressQueen;
