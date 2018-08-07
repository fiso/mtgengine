"use strict";
const Constants = require ("../../../Constants");
const BoldwyrIntimidatorBase = require("../setBBD/BoldwyrIntimidator");

class BoldwyrIntimidator extends BoldwyrIntimidatorBase {
  constructor (game) {
    super(game, "Boldwyr Intimidator", "Morningtide", "MOR");
  }
}

module.exports = BoldwyrIntimidator;
