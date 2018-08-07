"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImpulsiveCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Impulsive Charge", "Defeat a God", "TDAG");
  }
}

module.exports = ImpulsiveCharge;
