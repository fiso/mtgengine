"use strict";
const Constants = require ("../../../Constants");
const BoldwyrIntimidatorBase = require("../setFUT/BoldwyrIntimidator");

class BoldwyrIntimidator extends BoldwyrIntimidatorBase {
  constructor(game) {
    super(game, "Boldwyr Intimidator", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = BoldwyrIntimidator;
