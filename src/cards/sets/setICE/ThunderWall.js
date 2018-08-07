"use strict";
const Constants = require ("../../../Constants");
const ThunderWallBase = require("../setME2/ThunderWall");

class ThunderWall extends ThunderWallBase {
  constructor (game) {
    super(game, "Thunder Wall", "Ice Age", "ICE");
  }
}

module.exports = ThunderWall;
