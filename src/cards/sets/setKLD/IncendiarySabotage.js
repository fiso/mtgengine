"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncendiarySabotage extends UnimplementedCard {
  constructor (game) {
    super(game, "Incendiary Sabotage", "Kaladesh", "KLD");
  }
}

module.exports = IncendiarySabotage;
