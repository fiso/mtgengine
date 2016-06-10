"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinPsychopath extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Psychopath", "Scourge", "SCG");
  }
}

module.exports = GoblinPsychopath;
