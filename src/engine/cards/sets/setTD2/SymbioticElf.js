"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SymbioticElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Symbiotic Elf", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = SymbioticElf;
