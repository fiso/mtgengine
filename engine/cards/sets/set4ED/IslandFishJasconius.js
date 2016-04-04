"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IslandFishJasconiusBase = require("../setARN/IslandFishJasconius.js");

class IslandFishJasconius extends IslandFishJasconiusBase {
  constructor(game) {
    super(game, "Island Fish Jasconius", "Fourth Edition", "4ED");
  }
}

module.exports = IslandFishJasconius;
