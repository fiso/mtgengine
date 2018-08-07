'use strict';
const Constants = require('../../../Constants');
const CrimsonManticoreBase = require('../setME3/CrimsonManticore');

class CrimsonManticore extends CrimsonManticoreBase {
  constructor (game) {
    super(game, 'Crimson Manticore', 'Fourth Edition', '4ED');
  }
}

module.exports = CrimsonManticore;
