"use strict";
const Constants = require ("../../../Constants");
const FarhavenElfBase = require("../setC13/FarhavenElf");

class FarhavenElf extends FarhavenElfBase {
  constructor (game) {
    super(game, "Farhaven Elf", "Shadowmoor", "SHM");
  }
}

module.exports = FarhavenElf;
