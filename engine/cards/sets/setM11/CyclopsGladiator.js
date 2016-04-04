"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CyclopsGladiator extends Card {
  constructor(game) {
    super(game, "Cyclops Gladiator", "Magic 2011", "M11");
  }
}

module.exports = CyclopsGladiator;
