'use strict';
const Constants = require('../../../Constants');
const AshnodsAltarBase = require('../setEMA/AshnodsAltar');

class AshnodsAltar extends AshnodsAltarBase {
  constructor (game) {
    super(game, "Ashnod's Altar", 'Fifth Edition', '5ED');
  }
}

module.exports = AshnodsAltar;
