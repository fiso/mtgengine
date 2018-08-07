"use strict";
const Constants = require ("../../../Constants");
const SaprolingBase = require("../setTCM2/Saproling");

class Saproling extends SaprolingBase {
  constructor (game) {
    super(game, "Saproling", "Rivals of Ixalan Tokens", "TRIX");
  }
}

module.exports = Saproling;
