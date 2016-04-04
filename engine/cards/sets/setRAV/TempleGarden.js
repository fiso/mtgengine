"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TempleGarden extends Card {
  constructor(game) {
    super(game, "Temple Garden", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TempleGarden;
