"use strict";
const Constants = require ("../../../Constants");
const CrystalBallBase = require("../setC18/CrystalBall");

class CrystalBall extends CrystalBallBase {
  constructor (game) {
    super(game, "Crystal Ball", "Magic 2011", "M11");
  }
}

module.exports = CrystalBall;
