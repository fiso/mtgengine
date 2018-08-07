"use strict";
const Constants = require ("../../../Constants");
const SaprolingBase = require("../setTCM2/Saproling");

class Saproling extends SaprolingBase {
  constructor (game) {
    super(game, "Saproling", "Magic 2012 Tokens", "TM12");
  }
}

module.exports = Saproling;
