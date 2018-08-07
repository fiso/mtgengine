"use strict";
const Constants = require ("../../../Constants");
const CastleBase = require("../set7ED/Castle");

class Castle extends CastleBase {
  constructor (game) {
    super(game, "Castle", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Castle;
