"use strict";
const Constants = require ("../../../Constants");
const BoldwyrIntimidatorBase = require("../setBBD/BoldwyrIntimidator");

class BoldwyrIntimidator extends BoldwyrIntimidatorBase {
  constructor (game) {
    super(game, "Boldwyr Intimidator", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = BoldwyrIntimidator;
