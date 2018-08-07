'use strict';
const Constants = require('../../../Constants');
const MahamotiDjinnBase = require('../setIMA/MahamotiDjinn');

class MahamotiDjinn extends MahamotiDjinnBase {
  constructor (game) {
    super(game, 'Mahamoti Djinn', 'Revised Edition', '3ED');
  }
}

module.exports = MahamotiDjinn;
