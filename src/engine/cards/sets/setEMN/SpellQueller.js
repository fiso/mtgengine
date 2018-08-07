"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellQueller extends UnimplementedCard {
  constructor (game) {
    super(game, "Spell Queller", "Eldritch Moon", "EMN");
  }
}

module.exports = SpellQueller;
