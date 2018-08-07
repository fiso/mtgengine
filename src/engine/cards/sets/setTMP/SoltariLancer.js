"use strict";
const Constants = require ("../../../Constants");
const SoltariLancerBase = require("../setTPR/SoltariLancer");

class SoltariLancer extends SoltariLancerBase {
  constructor (game) {
    super(game, "Soltari Lancer", "Tempest", "TMP");
  }
}

module.exports = SoltariLancer;
