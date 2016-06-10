"use strict";
const Constants = require ("../../../Constants");
const RyuseitheFallingStarBase = require("../setARC/RyuseitheFallingStar");

class RyuseitheFallingStar extends RyuseitheFallingStarBase {
  constructor (game) {
    super(game, "Ryusei, the Falling Star", "Modern Masters", "MMA");
  }
}

module.exports = RyuseitheFallingStar;
