"use strict";
const Constants = require ("../../../Constants");
const BoldwyrIntimidatorBase = require("../setBBD/BoldwyrIntimidator");

class BoldwyrIntimidator extends BoldwyrIntimidatorBase {
  constructor (game) {
    super(game, "Boldwyr Intimidator", "Conspiracy", "CNS");
  }
}

module.exports = BoldwyrIntimidator;
