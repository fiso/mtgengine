"use strict";
const Constants = require ("../../../Constants");
const ElfhamePalaceBase = require("../setDDE/ElfhamePalace");

class ElfhamePalace extends ElfhamePalaceBase {
  constructor (game) {
    super(game, "Elfhame Palace", "Invasion", "INV");
  }
}

module.exports = ElfhamePalace;
