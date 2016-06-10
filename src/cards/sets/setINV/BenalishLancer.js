"use strict";
const Constants = require ("../../../Constants");
const BenalishLancerBase = require("../setDDG/BenalishLancer");

class BenalishLancer extends BenalishLancerBase {
  constructor (game) {
    super(game, "Benalish Lancer", "Invasion", "INV");
  }
}

module.exports = BenalishLancer;
