"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilumgarSpellEater extends UnimplementedCard {
  constructor(game) {
    super(game, "Silumgar Spell-Eater", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SilumgarSpellEater;
