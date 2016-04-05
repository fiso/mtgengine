"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CyclopsGladiator extends UnimplementedCard {
  constructor(game) {
    super(game, "Cyclops Gladiator", "Magic 2011", "M11");
  }
}

module.exports = CyclopsGladiator;
