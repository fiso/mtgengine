"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuicidalCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Suicidal Charge", "Conflux", "CON");
  }
}

module.exports = SuicidalCharge;
