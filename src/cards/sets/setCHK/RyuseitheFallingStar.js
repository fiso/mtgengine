"use strict";
const Constants = require ("../../../Constants");
const RyuseitheFallingStarBase = require("../setIMA/RyuseitheFallingStar");

class RyuseitheFallingStar extends RyuseitheFallingStarBase {
  constructor (game) {
    super(game, "Ryusei, the Falling Star", "Champions of Kamigawa", "CHK");
  }
}

module.exports = RyuseitheFallingStar;
