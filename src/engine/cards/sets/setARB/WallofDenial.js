"use strict";
const Constants = require ("../../../Constants");
const WallofDenialBase = require("../setMM3/WallofDenial");

class WallofDenial extends WallofDenialBase {
  constructor (game) {
    super(game, "Wall of Denial", "Alara Reborn", "ARB");
  }
}

module.exports = WallofDenial;
