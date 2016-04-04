"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TyrantsChoice extends Card {
  constructor(game) {
    super(game, "Tyrant's Choice", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = TyrantsChoice;
