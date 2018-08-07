"use strict";
const Constants = require ("../../../Constants");
const MagneticMountainBase = require("../set4ED/MagneticMountain");

class MagneticMountain extends MagneticMountainBase {
  constructor (game) {
    super(game, "Magnetic Mountain", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = MagneticMountain;
