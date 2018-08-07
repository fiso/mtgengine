'use strict';
const Constants = require('../../../Constants');
const CrimsonManticoreBase = require('../setME3/CrimsonManticore');

class CrimsonManticore extends CrimsonManticoreBase {
  constructor (game) {
    super(game, 'Crimson Manticore', 'Fifth Edition', '5ED');
  }
}

module.exports = CrimsonManticore;
