"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PegasusCharger extends UnimplementedCard {
  constructor(game) {
    super(game, "Pegasus Charger", "Anthologies", "ATH");
  }
}

module.exports = PegasusCharger;
