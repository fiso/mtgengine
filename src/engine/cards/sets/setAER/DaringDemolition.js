"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaringDemolition extends UnimplementedCard {
  constructor (game) {
    super(game, "Daring Demolition", "Aether Revolt", "AER");
  }
}

module.exports = DaringDemolition;
