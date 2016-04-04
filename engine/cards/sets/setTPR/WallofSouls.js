"use strict";
const Constants = require ("../../../Constants");
const WallofSoulsBase = require("../setSTH/WallofSouls");

class WallofSouls extends WallofSoulsBase {
  constructor(game) {
    super(game, "Wall of Souls", "Tempest Remastered", "TPR");
  }
}

module.exports = WallofSouls;
