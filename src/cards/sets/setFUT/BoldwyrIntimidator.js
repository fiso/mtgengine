"use strict";
const Constants = require ("../../../Constants");
const BoldwyrIntimidatorBase = require("../setBBD/BoldwyrIntimidator");

class BoldwyrIntimidator extends BoldwyrIntimidatorBase {
  constructor (game) {
    super(game, "Boldwyr Intimidator", "Future Sight", "FUT");
  }
}

module.exports = BoldwyrIntimidator;
