"use strict";
const Constants = require ("../../../Constants");
const IronStarBase = require("../set6ED/IronStar");

class IronStar extends IronStarBase {
  constructor (game) {
    super(game, "Iron Star", "Revised Edition", "3ED");
  }
}

module.exports = IronStar;
