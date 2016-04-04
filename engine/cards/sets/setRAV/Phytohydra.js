"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Phytohydra extends UnimplementedCard {
  constructor(game) {
    super(game, "Phytohydra", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Phytohydra;
