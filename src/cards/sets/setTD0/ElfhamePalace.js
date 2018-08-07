"use strict";
const Constants = require ("../../../Constants");
const ElfhamePalaceBase = require("../setC17/ElfhamePalace");

class ElfhamePalace extends ElfhamePalaceBase {
  constructor (game) {
    super(game, "Elfhame Palace", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = ElfhamePalace;
