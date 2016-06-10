"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElfhamePalace extends UnimplementedCard {
  constructor (game) {
    super(game, "Elfhame Palace", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ElfhamePalace;
