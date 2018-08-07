"use strict";
const Constants = require ("../../../Constants");
const IslandFishJasconiusBase = require("../set4ED/IslandFishJasconius");

class IslandFishJasconius extends IslandFishJasconiusBase {
  constructor (game) {
    super(game, "Island Fish Jasconius", "Arabian Nights", "ARN");
  }
}

module.exports = IslandFishJasconius;
