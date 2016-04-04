"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrySpell extends UnimplementedCard {
  constructor(game) {
    super(game, "Dry Spell", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DrySpell;
