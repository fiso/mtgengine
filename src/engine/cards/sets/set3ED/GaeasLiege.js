'use strict';
const Constants = require('../../../Constants');
const GaeasLiegeBase = require('../setTSB/GaeasLiege');

class GaeasLiege extends GaeasLiegeBase {
  constructor (game) {
    super(game, "Gaea's Liege", 'Revised Edition', '3ED');
  }
}

module.exports = GaeasLiege;
