"use strict";
const Constants = require ("../../../Constants");
const SphinxsRevelationBase = require("../setMM3/SphinxsRevelation");

class SphinxsRevelation extends SphinxsRevelationBase {
  constructor (game) {
    super(game, "Sphinx's Revelation", "Return to Ravnica", "RTR");
  }
}

module.exports = SphinxsRevelation;
