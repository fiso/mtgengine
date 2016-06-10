"use strict";
const Constants = require ("../../../Constants");
const MagneticMountainBase = require("../setARN/MagneticMountain");

class MagneticMountain extends MagneticMountainBase {
  constructor (game) {
    super(game, "Magnetic Mountain", "Revised Edition", "3ED");
  }
}

module.exports = MagneticMountain;
