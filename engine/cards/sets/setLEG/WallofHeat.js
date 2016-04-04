"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofHeatBase = require("../setBRB/WallofHeat.js");

class WallofHeat extends WallofHeatBase {
  constructor(game) {
    super(game, "Wall of Heat", "Legends", "LEG");
  }
}

module.exports = WallofHeat;
