"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyField extends UnimplementedCard {
  constructor (game) {
    super(game, "Energy Field", "World Championship Decks 2000", "WC00");
  }
}

module.exports = EnergyField;
