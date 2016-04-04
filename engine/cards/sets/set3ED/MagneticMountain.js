"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagneticMountainBase = require("../setARN/MagneticMountain.js");

class MagneticMountain extends MagneticMountainBase {
  constructor(game) {
    super(game, "Magnetic Mountain", "Revised Edition", "3ED");
  }
}

module.exports = MagneticMountain;
