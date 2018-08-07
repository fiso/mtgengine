"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrialofStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Trial of Strength", "Amonkhet", "AKH");
  }
}

module.exports = TrialofStrength;
