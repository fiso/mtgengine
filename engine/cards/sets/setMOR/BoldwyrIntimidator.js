"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoldwyrIntimidatorBase = require("../setFUT/BoldwyrIntimidator.js");

class BoldwyrIntimidator extends BoldwyrIntimidatorBase {
  constructor(game) {
    super(game, "Boldwyr Intimidator", "Morningtide", "MOR");
  }
}

module.exports = BoldwyrIntimidator;
