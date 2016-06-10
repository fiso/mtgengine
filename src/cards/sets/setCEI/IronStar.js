"use strict";
const Constants = require ("../../../Constants");
const IronStarBase = require("../set6ED/IronStar");

class IronStar extends IronStarBase {
  constructor (game) {
    super(game, "Iron Star", "International Collector's Edition", "CEI");
  }
}

module.exports = IronStar;
