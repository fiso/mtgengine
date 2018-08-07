"use strict";
const Constants = require ("../../../Constants");
const ElfhamePalaceBase = require("../setC17/ElfhamePalace");

class ElfhamePalace extends ElfhamePalaceBase {
  constructor (game) {
    super(game, "Elfhame Palace", "World Championship Decks 2003", "WC03");
  }
}

module.exports = ElfhamePalace;
