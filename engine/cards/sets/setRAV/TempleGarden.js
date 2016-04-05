"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleGarden extends UnimplementedCard {
  constructor(game) {
    super(game, "Temple Garden", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TempleGarden;
