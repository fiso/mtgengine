"use strict";
const Constants = require ("../../../Constants");
const IslandFishJasconiusBase = require("../setARN/IslandFishJasconius");

class IslandFishJasconius extends IslandFishJasconiusBase {
  constructor (game) {
    super(game, "Island Fish Jasconius", "Revised Edition", "3ED");
  }
}

module.exports = IslandFishJasconius;
