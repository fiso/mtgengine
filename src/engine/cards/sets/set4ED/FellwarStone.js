'use strict';
const Constants = require('../../../Constants');
const FellwarStoneBase = require('../setCM2/FellwarStone');

class FellwarStone extends FellwarStoneBase {
  constructor (game) {
    super(game, 'Fellwar Stone', 'Fourth Edition', '4ED');
  }
}

module.exports = FellwarStone;
