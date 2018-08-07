"use strict";
const Constants = require ("../../../Constants");
const SwordstoPlowsharesBase = require("../setBBD/SwordstoPlowshares");

class SwordstoPlowshares extends SwordstoPlowsharesBase {
  constructor (game) {
    super(game, "Swords to Plowshares", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = SwordstoPlowshares;
