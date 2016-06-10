"use strict";
const Constants = require ("../../../Constants");
const IronStarBase = require("../set6ED/IronStar");

class IronStar extends IronStarBase {
  constructor (game) {
    super(game, "Iron Star", "Seventh Edition", "7ED");
  }
}

module.exports = IronStar;
