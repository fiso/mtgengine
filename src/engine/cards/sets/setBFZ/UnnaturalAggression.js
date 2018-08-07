"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnnaturalAggression extends UnimplementedCard {
  constructor (game) {
    super(game, "Unnatural Aggression", "Battle for Zendikar", "BFZ");
  }
}

module.exports = UnnaturalAggression;
