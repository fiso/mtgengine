"use strict";
const Constants = require ("../../../Constants");
const IronStarBase = require("../set8ED/IronStar");

class IronStar extends IronStarBase {
  constructor (game) {
    super(game, "Iron Star", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = IronStar;
