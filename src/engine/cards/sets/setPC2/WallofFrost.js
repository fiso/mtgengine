"use strict";
const Constants = require ("../../../Constants");
const WallofFrostBase = require("../setMM3/WallofFrost");

class WallofFrost extends WallofFrostBase {
  constructor (game) {
    super(game, "Wall of Frost", "Planechase 2012", "PC2");
  }
}

module.exports = WallofFrost;
