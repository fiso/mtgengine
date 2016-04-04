"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RyuseitheFallingStarBase = require("../setARC/RyuseitheFallingStar.js");

class RyuseitheFallingStar extends RyuseitheFallingStarBase {
  constructor(game) {
    super(game, "Ryusei, the Falling Star", "Prerelease Events", "pPRE");
  }
}

module.exports = RyuseitheFallingStar;
