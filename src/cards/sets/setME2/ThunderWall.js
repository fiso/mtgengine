"use strict";
const Constants = require ("../../../Constants");
const ThunderWallBase = require("../setICE/ThunderWall");

class ThunderWall extends ThunderWallBase {
  constructor(game) {
    super(game, "Thunder Wall", "Masters Edition II", "ME2");
  }
}

module.exports = ThunderWall;
