"use strict";
const Constants = require ("../../../Constants");
const SaprolingBase = require("../setTCM2/Saproling");

class Saproling extends SaprolingBase {
  constructor (game) {
    super(game, "Saproling", "Return to Ravnica Tokens", "TRTR");
  }
}

module.exports = Saproling;
