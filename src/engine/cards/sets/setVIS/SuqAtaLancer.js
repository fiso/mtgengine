"use strict";
const Constants = require ("../../../Constants");
const SuqAtaLancerBase = require("../setTSB/SuqAtaLancer");

class SuqAtaLancer extends SuqAtaLancerBase {
  constructor (game) {
    super(game, "Suq'Ata Lancer", "Visions", "VIS");
  }
}

module.exports = SuqAtaLancer;
