"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfantryVeteran extends UnimplementedCard {
  constructor (game) {
    super(game, "Infantry Veteran", "Anthologies", "ATH");
  }
}

module.exports = InfantryVeteran;
