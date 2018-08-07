"use strict";
const Constants = require ("../../../Constants");
const WallofFrostBase = require("../setMM3/WallofFrost");

class WallofFrost extends WallofFrostBase {
  constructor (game) {
    super(game, "Wall of Frost", "Magic 2014", "M14");
  }
}

module.exports = WallofFrost;
