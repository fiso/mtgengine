"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageAlliance extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Alliance", "Eldritch Moon", "EMN");
  }
}

module.exports = SavageAlliance;
