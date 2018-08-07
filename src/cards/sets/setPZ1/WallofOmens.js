"use strict";
const Constants = require ("../../../Constants");
const WallofOmensBase = require("../setEMA/WallofOmens");

class WallofOmens extends WallofOmensBase {
  constructor (game) {
    super(game, "Wall of Omens", "Legendary Cube", "PZ1");
  }
}

module.exports = WallofOmens;
