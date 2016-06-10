"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndeadGladiator extends UnimplementedCard {
  constructor (game) {
    super(game, "Undead Gladiator", "Onslaught", "ONS");
  }
}

module.exports = UndeadGladiator;
