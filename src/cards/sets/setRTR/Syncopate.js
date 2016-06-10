"use strict";
const Constants = require ("../../../Constants");
const SyncopateBase = require("../setODY/Syncopate");

class Syncopate extends SyncopateBase {
  constructor (game) {
    super(game, "Syncopate", "Return to Ravnica", "RTR");
  }
}

module.exports = Syncopate;
