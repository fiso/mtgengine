"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneMelee extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcane Melee", "Avacyn Restored", "AVR");
  }
}

module.exports = ArcaneMelee;
