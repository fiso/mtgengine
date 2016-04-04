"use strict";
const Constants = require ("../../../Constants");
const WallofWoodBase = require("../setCED/WallofWood");

class WallofWood extends WallofWoodBase {
  constructor(game) {
    super(game, "Wall of Wood", "Limited Edition Beta", "LEB");
  }
}

module.exports = WallofWood;
