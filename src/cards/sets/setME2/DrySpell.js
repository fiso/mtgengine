"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrySpell extends UnimplementedCard {
  constructor (game) {
    super(game, "Dry Spell", "Masters Edition II", "ME2");
  }
}

module.exports = DrySpell;
