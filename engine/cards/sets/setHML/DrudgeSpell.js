"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrudgeSpell extends UnimplementedCard {
  constructor(game) {
    super(game, "Drudge Spell", "Homelands", "HML");
  }
}

module.exports = DrudgeSpell;
