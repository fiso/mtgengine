"use strict";
const Constants = require ("../../../Constants");
const ElfhamePalaceBase = require("../setC17/ElfhamePalace");

class ElfhamePalace extends ElfhamePalaceBase {
  constructor (game) {
    super(game, "Elfhame Palace", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ElfhamePalace;
