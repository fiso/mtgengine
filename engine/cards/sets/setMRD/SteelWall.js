"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteelWallBase = require("../setDDF/SteelWall.js");

class SteelWall extends SteelWallBase {
  constructor(game) {
    super(game, "Steel Wall", "Mirrodin", "MRD");
  }
}

module.exports = SteelWall;
