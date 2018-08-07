"use strict";
const Constants = require ("../../../Constants");
const HanweirLancerBase = require("../setMM3/HanweirLancer");

class HanweirLancer extends HanweirLancerBase {
  constructor (game) {
    super(game, "Hanweir Lancer", "Avacyn Restored", "AVR");
  }
}

module.exports = HanweirLancer;
