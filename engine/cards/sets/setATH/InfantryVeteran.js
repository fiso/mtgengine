"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfantryVeteran extends Card {
  constructor(game) {
    super(game, "Infantry Veteran", "Anthologies", "ATH");
  }
}

module.exports = InfantryVeteran;
