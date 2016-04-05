"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChiefoftheFoundry extends UnimplementedCard {
  constructor(game) {
    super(game, "Chief of the Foundry", "Magic Origins", "ORI");
  }
}

module.exports = ChiefoftheFoundry;
