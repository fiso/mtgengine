"use strict";
const Constants = require ("../../../Constants");
const SuqAtaLancerBase = require("../setTSB/SuqAtaLancer");

class SuqAtaLancer extends SuqAtaLancerBase {
  constructor (game) {
    super(game, "Suq'Ata Lancer", "World Championship Decks 1997", "WC97");
  }
}

module.exports = SuqAtaLancer;
