"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChanceEncounter extends UnimplementedCard {
  constructor(game) {
    super(game, "Chance Encounter", "Odyssey", "ODY");
  }
}

module.exports = ChanceEncounter;
