"use strict";
const Constants = require ("../../../Constants");
const DeadRevelerBase = require("../setIMA/DeadReveler");

class DeadReveler extends DeadRevelerBase {
  constructor (game) {
    super(game, "Dead Reveler", "Return to Ravnica", "RTR");
  }
}

module.exports = DeadReveler;
