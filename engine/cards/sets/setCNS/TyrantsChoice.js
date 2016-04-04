"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TyrantsChoice extends UnimplementedCard {
  constructor(game) {
    super(game, "Tyrant's Choice", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = TyrantsChoice;
