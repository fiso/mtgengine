"use strict";
const Constants = require ("../../../Constants");
const WallofOmensBase = require("../setEMA/WallofOmens");

class WallofOmens extends WallofOmensBase {
  constructor (game) {
    super(game, "Wall of Omens", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = WallofOmens;
