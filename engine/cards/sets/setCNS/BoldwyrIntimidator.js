"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoldwyrIntimidatorBase = require("../setFUT/BoldwyrIntimidator.js");

class BoldwyrIntimidator extends BoldwyrIntimidatorBase {
  constructor(game) {
    super(game, "Boldwyr Intimidator", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = BoldwyrIntimidator;
