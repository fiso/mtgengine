"use strict";
const Constants = require ("../../../Constants");
const IronStarBase = require("../set6ED/IronStar");

class IronStar extends IronStarBase {
  constructor(game) {
    super(game, "Iron Star", "Eighth Edition", "8ED");
  }
}

module.exports = IronStar;
