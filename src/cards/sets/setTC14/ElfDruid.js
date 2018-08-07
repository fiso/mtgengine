"use strict";
const Constants = require ("../../../Constants");
const ElfDruidBase = require("../setTCMA/ElfDruid");

class ElfDruid extends ElfDruidBase {
  constructor (game) {
    super(game, "Elf Druid", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = ElfDruid;
