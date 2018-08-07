"use strict";
const Constants = require ("../../../Constants");
const NyxFleeceRamBase = require("../setA25/NyxFleeceRam");

class NyxFleeceRam extends NyxFleeceRamBase {
  constructor (game) {
    super(game, "Nyx-Fleece Ram", "Journey into Nyx", "JOU");
  }
}

module.exports = NyxFleeceRam;
