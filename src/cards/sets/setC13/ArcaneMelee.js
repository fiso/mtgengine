"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneMelee extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcane Melee", "Commander 2013", "C13");
  }
}

module.exports = ArcaneMelee;
