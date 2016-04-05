"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellbaneCentaur extends UnimplementedCard {
  constructor(game) {
    super(game, "Spellbane Centaur", "Odyssey", "ODY");
  }
}

module.exports = SpellbaneCentaur;
