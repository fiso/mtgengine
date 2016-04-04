"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SuqAtaLancerBase = require("../setTSB/SuqAtaLancer.js");

class SuqAtaLancer extends SuqAtaLancerBase {
  constructor(game) {
    super(game, "Suq'Ata Lancer", "Visions", "VIS");
  }
}

module.exports = SuqAtaLancer;
