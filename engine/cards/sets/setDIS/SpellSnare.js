"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellSnare extends UnimplementedCard {
  constructor(game) {
    super(game, "Spell Snare", "Dissension", "DIS");
  }
}

module.exports = SpellSnare;
