"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElfhamePalace extends Card {
  constructor(game) {
    super(game, "Elfhame Palace", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ElfhamePalace;
