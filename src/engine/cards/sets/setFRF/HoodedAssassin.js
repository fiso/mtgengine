"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoodedAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Hooded Assassin", "Fate Reforged", "FRF");
  }
}

module.exports = HoodedAssassin;
