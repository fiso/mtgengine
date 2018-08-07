"use strict";
const Constants = require ("../../../Constants");
const WallofKelpBase = require("../setME2/WallofKelp");

class WallofKelp extends WallofKelpBase {
  constructor (game) {
    super(game, "Wall of Kelp", "Homelands", "HML");
  }
}

module.exports = WallofKelp;
