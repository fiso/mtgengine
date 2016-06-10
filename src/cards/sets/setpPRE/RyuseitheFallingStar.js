"use strict";
const Constants = require ("../../../Constants");
const RyuseitheFallingStarBase = require("../setARC/RyuseitheFallingStar");

class RyuseitheFallingStar extends RyuseitheFallingStarBase {
  constructor (game) {
    super(game, "Ryusei, the Falling Star", "Prerelease Events", "pPRE");
  }
}

module.exports = RyuseitheFallingStar;
