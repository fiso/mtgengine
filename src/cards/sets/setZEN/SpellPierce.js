"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellPierce extends UnimplementedCard {
  constructor (game) {
    super(game, "Spell Pierce", "Zendikar", "ZEN");
  }
}

module.exports = SpellPierce;
