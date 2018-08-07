"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoundryScreecher extends UnimplementedCard {
  constructor (game) {
    super(game, "Foundry Screecher", "Kaladesh", "KLD");
  }
}

module.exports = FoundryScreecher;
