"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NomadicElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Nomadic Elf", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = NomadicElf;
