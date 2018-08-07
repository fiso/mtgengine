"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SupernaturalStamina extends UnimplementedCard {
  constructor (game) {
    super(game, "Supernatural Stamina", "Masters 25", "A25");
  }
}

module.exports = SupernaturalStamina;
