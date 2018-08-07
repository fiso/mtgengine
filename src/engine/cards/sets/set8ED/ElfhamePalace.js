"use strict";
const Constants = require ("../../../Constants");
const ElfhamePalaceBase = require("../setC17/ElfhamePalace");

class ElfhamePalace extends ElfhamePalaceBase {
  constructor (game) {
    super(game, "Elfhame Palace", "Eighth Edition", "8ED");
  }
}

module.exports = ElfhamePalace;
