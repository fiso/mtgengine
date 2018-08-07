"use strict";
const Constants = require ("../../../Constants");
const TauntingElfBase = require("../setONS/TauntingElf");

class TauntingElf extends TauntingElfBase {
  constructor (game) {
    super(game, "Taunting Elf", "Urza's Destiny", "UDS");
  }
}

module.exports = TauntingElf;
