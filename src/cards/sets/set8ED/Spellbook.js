"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spellbook extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellbook", "Eighth Edition", "8ED");
  }
}

module.exports = Spellbook;
