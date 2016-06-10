"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyField extends UnimplementedCard {
  constructor (game) {
    super(game, "Energy Field", "Urza's Saga", "USG");
  }
}

module.exports = EnergyField;
