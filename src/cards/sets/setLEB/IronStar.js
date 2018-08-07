"use strict";
const Constants = require ("../../../Constants");
const IronStarBase = require("../set8ED/IronStar");

class IronStar extends IronStarBase {
  constructor (game) {
    super(game, "Iron Star", "Limited Edition Beta", "LEB");
  }
}

module.exports = IronStar;
