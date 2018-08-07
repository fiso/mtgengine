"use strict";
const Constants = require ("../../../Constants");
const WallofWoodBase = require("../setDPA/WallofWood");

class WallofWood extends WallofWoodBase {
  constructor (game) {
    super(game, "Wall of Wood", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WallofWood;
