"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndeadGladiator extends UnimplementedCard {
  constructor (game) {
    super(game, "Undead Gladiator", "Masters 25", "A25");
  }
}

module.exports = UndeadGladiator;
