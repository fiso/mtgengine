"use strict";
const Constants = require ("../../../Constants");
const BoldwyrIntimidatorBase = require("../setFUT/BoldwyrIntimidator");

class BoldwyrIntimidator extends BoldwyrIntimidatorBase {
  constructor (game) {
    super(game, "Boldwyr Intimidator", "Morningtide", "MOR");
  }
}

module.exports = BoldwyrIntimidator;
