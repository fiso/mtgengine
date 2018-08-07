"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BallistaCharger extends UnimplementedCard {
  constructor (game) {
    super(game, "Ballista Charger", "Kaladesh", "KLD");
  }
}

module.exports = BallistaCharger;
