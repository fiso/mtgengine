"use strict";
const Constants = require ("../../../Constants");
const SouldrinkerBase = require("../setDD3_DVD/Souldrinker");

class Souldrinker extends SouldrinkerBase {
  constructor(game) {
    super(game, "Souldrinker", "Tempest", "TMP");
  }
}

module.exports = Souldrinker;
