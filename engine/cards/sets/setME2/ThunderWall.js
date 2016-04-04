"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderWallBase = require("../setICE/ThunderWall.js");

class ThunderWall extends ThunderWallBase {
  constructor(game) {
    super(game, "Thunder Wall", "Masters Edition II", "ME2");
  }
}

module.exports = ThunderWall;
