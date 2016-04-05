"use strict";
const Constants = require ("../../../Constants");
const SoltariLancerBase = require("../setTMP/SoltariLancer");

class SoltariLancer extends SoltariLancerBase {
  constructor(game) {
    super(game, "Soltari Lancer", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariLancer;
