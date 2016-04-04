"use strict";
const Constants = require ("../../../Constants");
const WallofWoodBase = require("../setCED/WallofWood");

class WallofWood extends WallofWoodBase {
  constructor(game) {
    super(game, "Wall of Wood", "Tenth Edition", "10E");
  }
}

module.exports = WallofWood;
