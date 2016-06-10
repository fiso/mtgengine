"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarriorsHonor extends UnimplementedCard {
  constructor (game) {
    super(game, "Warrior's Honor", "Anthologies", "ATH");
  }
}

module.exports = WarriorsHonor;
