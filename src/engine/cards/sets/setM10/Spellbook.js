"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spellbook extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellbook", "Magic 2010", "M10");
  }
}

module.exports = Spellbook;
