"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfantryVeteran extends UnimplementedCard {
  constructor (game) {
    super(game, "Infantry Veteran", "Iconic Masters", "IMA");
  }
}

module.exports = InfantryVeteran;
