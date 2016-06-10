"use strict";
const Constants = require ("../../../Constants");
const WallofKelpBase = require("../setHML/WallofKelp");

class WallofKelp extends WallofKelpBase {
  constructor (game) {
    super(game, "Wall of Kelp", "Masters Edition II", "ME2");
  }
}

module.exports = WallofKelp;
