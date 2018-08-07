"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoundryInspector extends UnimplementedCard {
  constructor (game) {
    super(game, "Foundry Inspector", "Kaladesh", "KLD");
  }
}

module.exports = FoundryInspector;
