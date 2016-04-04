"use strict";
const Constants = require ("../../../Constants");
const WallofFrostBase = require("../setM10/WallofFrost");

class WallofFrost extends WallofFrostBase {
  constructor(game) {
    super(game, "Wall of Frost", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = WallofFrost;
