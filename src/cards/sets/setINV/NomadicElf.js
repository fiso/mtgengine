"use strict";
const Constants = require ("../../../Constants");
const NomadicElfBase = require("../setDDE/NomadicElf");

class NomadicElf extends NomadicElfBase {
  constructor (game) {
    super(game, "Nomadic Elf", "Invasion", "INV");
  }
}

module.exports = NomadicElf;
