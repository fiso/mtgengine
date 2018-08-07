"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrimsonMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Crimson Mage", "Masters 25", "A25");
  }
}

module.exports = CrimsonMage;
